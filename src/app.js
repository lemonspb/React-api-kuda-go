import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import List from "./list";
import CartEvent from './cart-event';
import Header from './header'; 
import './app.css';
const App = () => {
  const BASE_URL = "https://kudago.com/public-api/v1.4/";




  useEffect(() => {
    getEvents();
    onEventSelected()
    
    
  }, []);

  const  [ events, setEvents] = useState([]);
  const  [ eventsId, setEventsId] = useState('');
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
 const onEventSelected = (id) => {
      setEventsId(id)
  };


  return (
    <Router>
        <div  className='app'>
          <Header />
       <div className='container'>   
       <div class="list-wrap">
        {events.map(event =>(
               <List   name ={event.short_title} key={event.id} description = {event.description} image={event.images[0].image} placeId={event.place.id} id={event.id} onItemSelected={onEventSelected} />

        ))}
        </div>
        {eventsId ? <CartEvent selectId = {eventsId}/> : null}
      
            </div>
        
    </div>
    </Router>
  );
};

export default App;
