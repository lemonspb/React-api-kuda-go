import React, { useEffect, useState } from "react";
import { Loader,Card,Header } from "semantic-ui-react";
import CardEvents from "../Card-events";
import Paginations from "../Pagination";
import { withRouter } from "react-router-dom";

const ListEvents = ({ history, page,}) => {
  let cityStorage = JSON.parse(localStorage.getItem("storageCity")) || {};
  const [events, setEvents] = useState([]);
  const [loader, setLoader] = useState(true);
  
  useEffect(() => {
    getEvents(cityStorage.slug,page);
  },[cityStorage.slug,page]);
  const actualDate =   new Date().getTime().toString().slice(0,10)

  const getEvents = (slugCity,pages) => {
  const BASE_URL = "https://kudago.com/public-api/v1.4/";
    fetch(
      `${BASE_URL}/events?&fields=dates,images,description,id,title,short_title,place&expand=place,dates&lang=ru&location=${slugCity}&page=${pages}&text_format=text&actual_since=${actualDate}`
    ).then(async response => {
      if (response.status !== 200) {
        return;
      }
      const data = await response.json();
     console.log(data.results)
      setEvents(data.results);

      setLoader(false);
    });
  };

const pageNumber = pages => {
    history.push(`${pages}`);
  };

 

  if (loader) {
    return (
      <Loader active={loader} size="medium">
        Загрузка
      </Loader>
    );
  }


  return (
    <React.Fragment>
          <div className="top-header">
        <Header as="h1">Coбытия</Header>
         <Paginations pageNumber={pageNumber} />

      </div>
  
      <Card.Group centered stackable className="card-group">

{events.map((event)=>(

<CardEvents key={event.id} place={event.place} title={event.short_title || event.title} description={event.description} image={event.images[0].image} id={event.id}/>)
)}

  
  </Card.Group>
    
    </React.Fragment>
  );
};

export default withRouter(ListEvents);
