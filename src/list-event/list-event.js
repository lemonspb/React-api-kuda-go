import React,{ useEffect, useState } from 'react';
import ListItem from '../list-event-item';
import { withRouter } from 'react-router-dom';
import Spinner from '../spinner'
const List = ({history})=>{


  const BASE_URL = "https://kudago.com/public-api/v1.4/";




  useEffect(() => {
    getEvents()
      
    
  }, []);

  const  [ events, setEvents] = useState([]);
  const  [ loading , setLoaing] = useState(true);

  const getEvents = () => {
    fetch(
      `${BASE_URL}/events?fields=dates,images,description,id,title,short_title,place&expand=place&lang=ru&location=nsk`
    ).then(async response => {
      if (response.status !== 200) {
        return;
      }
      const data = await response.json();

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
    <h2 className ='title'> События </h2>
  {events.map(event =>(
    <ListItem  
     name ={event.short_title} key={event.id} 
     description = {event.description} 
     image={event.images[0].image}
      placeName={event.place.title } 
      id={event.id}  onItemSelected={(itemId)=>{
      history.push(`${itemId}`)
      }}/>

))}
</div>
)


}


export default withRouter(List)