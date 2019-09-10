import React,{ useEffect, useState } from 'react';
import ListItem from '../list-event-item';
import { withRouter } from 'react-router-dom';

const List = ({history})=>{


  const BASE_URL = "https://kudago.com/public-api/v1.4/";




  useEffect(() => {
    getEvents();
    
    
  }, []);

  const  [ events, setEvents] = useState([]);

  const getEvents = () => {
    fetch(
      `${BASE_URL}/events?fields=dates,images,description,id,title,short_title,place&lang=ru&location=nsk`
    ).then(async response => {
      if (response.status !== 200) {
        return;
      }
      const data = await response.json();

      setEvents(data.results);
      console.log(data.results)
    });



  };


return (

  <div className='list-wrap'>
    <h2 className ='title'> События </h2>
  {events.map(event =>(
    <ListItem  
     name ={event.short_title} key={event.id} 
     description = {event.description} 
     image={event.images[0].image}
      placeId={event.place.id } 
      id={event.id}  onItemSelected={(itemId)=>{
      history.push(`${itemId}`)
      }}/>

))}
</div>
)


}


export default withRouter(List)