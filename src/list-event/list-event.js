import React,{ useEffect, useState } from 'react';
import ListItem from '../list-event-item';
import { withRouter } from 'react-router-dom';
import Spinner from '../spinner'
const List = ({history,setDate })=>{


  const BASE_URL = "https://kudago.com/public-api/v1.4/";


  const cityName = JSON.parse(localStorage.getItem("storageCity")) 

  

  useEffect(() => {
    getEvents()
  
  },[setDate]);

  const  [ events, setEvents] = useState([]);
  const  [ size , setSize] = useState(5);
  const  [ loading , setLoaing] = useState(true);

  

  const getEvents = () => {
    fetch(
      `${BASE_URL}/events?actual_since=${setDate}&fields=dates,images,description,id,title,short_title,place&expand=place,dates&lang=ru&location=${cityName.slug}&page=1&page_size=10`
    ).then(async response => {
      if (response.status !== 200) {
        return;
      }
      const data = await response.json();
      console.log(cityName.slug)

      setEvents(data.results);
      setLoaing(false)

      console.log(data.results)
    });



  };
  if(loading){
return <Spinner />

  }


return (
  <div className='list-wrap'>
    <h2 className ='title'> События</h2>
  {events.map(event =>(
    <ListItem  
     name ={event.short_title || event.title } key={event.id} 
     description = {event.description} 
     image={event.images[0].image}
     placeTitle={event.place && event.place.title}
      id={event.id}  onItemSelected={(itemId)=>{
      history.push(`${itemId}`)
      }}/>

))}
      <button className='add-more' onClick={()=>setSize(size+20)}>
      Добаить еще</button>
</div>
)


}





export default withRouter(List)