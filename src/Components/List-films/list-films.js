import React, { useEffect, useState } from "react";
import { Loader,Item,Header } from "semantic-ui-react";
import CardFilms from '../Card-films'
import { withRouter } from "react-router-dom";

const ListFilms = ({ history, page}) => {
  let cityStorage = JSON.parse(localStorage.getItem("storageCity")) || {};
  const [films, setFilms] = useState([]);
  const [loader, setLoader] = useState(true);
  
  useEffect(() => {
    getFilms(cityStorage.slug,page);
  },[cityStorage.slug,page]);

  const getFilms = (slugCity) => {
  const BASE_URL = "https://kudago.com/public-api/v1.4/";

    fetch(
      `${BASE_URL}/movies?&fields=description,title,poster,imdb_rating,id&lang=ru&text_format=text&location=${slugCity}&page=1`
    ).then(async response => {
      if (response.status !== 200) {
        return;
      }
      const data = await response.json();
      console.log(data.results)
      setFilms(data.results);

      setLoader(false);
    });
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
        <Header as="h1">Фильмы</Header>

      </div>
  <Item.Group>
{films.map((item)=>(

<CardFilms poster={item.poster.image} title={item.title} rating={item.imdb_rating} key={item.id} description={item.description} id={item.id}/>
))}
  
  
  </Item.Group>
    
    </React.Fragment>
  );
};

export default withRouter(ListFilms);
