import React, { useEffect, useState } from "react";
import { Loader,Item,Header } from "semantic-ui-react";
import CardNews from '../Card-news';
import Paginations from "../Pagination";
import { withRouter } from "react-router-dom";

const ListNews = ({ history, page,}) => {
  let cityStorage = JSON.parse(localStorage.getItem("storageCity")) || {};
  const [news, setNews] = useState([]);
  const [loader, setLoader] = useState(true);
  
  useEffect(() => {
    getNews(cityStorage.slug,page);
  },[cityStorage.slug,page]);

  const getNews = (slugCity,pages) => {
  const BASE_URL = "https://kudago.com/public-api/v1.4/";
  const NO_CORS  = "https://cors-anywhere.herokuapp.com/"

    fetch(
      `${NO_CORS}${BASE_URL}/news?lang=ru&fields=id,publication_date,title,slug,place,description,body_text,images&expand=publication_date&order_by=&text_format=text&ids=&location=${slugCity}&actual_only=true
=text&page=${pages}`
    ).then(async response => {
      if (response.status !== 200) {
        return;
      }
      const data = await response.json();
console.log(data.results)
      setNews(data.results);

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
        <Header as="h1">Новости</Header>
        <Paginations pageNumber={pageNumber} />

      </div>
  <Item.Group>
{news.map((item)=>(

<CardNews title={item.title} image={item.images[0].image} description={item.description} date={item.publication_date} id={item.id} key={item.id}/>
))}
  
  </Item.Group>
                    <Paginations pageNumber={pageNumber} />

    </React.Fragment>
  );
};

export default withRouter(ListNews);
