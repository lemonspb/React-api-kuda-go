import React, { useEffect, useState } from "react";
import { Card, Header, Loader } from "semantic-ui-react";
import CardPlace from "../Card-place";
import Paginations from "../Pagination";
import "./list-places.scss";
import { withRouter } from "react-router-dom";
import ModalMap from "../ModalMap";

const ListPlaces = ({ history, page }) => {
  let cityStorage = JSON.parse(localStorage.getItem("storageCity")) || {};
  const [places, setPlace] = useState([]);
  const [loader, setLoader] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [modalMapData, setModalMapData] = useState([]);

  useEffect(() => {
    getPlace(cityStorage.slug, page);
  }, [page, cityStorage.slug]);

  const getPlace = (slugCity, pages) => {
  const BASE_URL = "https://kudago.com/public-api/v1.4/";

    fetch(
      `${BASE_URL}/places?fields=id,title,address,images,categories,is_closed,coords,description&expand=place&lang=ru&location=${slugCity}&text_format
=text&page=${pages}`
    ).then(async response => {
      if (response.status !== 200) {
        return;
      }
      const data = await response.json();
console.log(data.results)
      setPlace(data.results);
      setLoader(false);
    });
  };


 

  const pageNumber = pages => {
    history.push(`${pages}`);
  };


  const openMap = id => {
    setOpenModal(true);
    setModalMapData(places.find(el => el.id === id));
  };


  const  closeModal = bool =>{
    setOpenModal(bool);
  }


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
        <Header as="h1">Места</Header>
        <Paginations  pageNumber={pageNumber} />
      </div>

      <Card.Group centered stackable className="card-group">
        {places.map(place => (
          <CardPlace
            id={place.id}
            openMap={openMap}
            key={place.id}
            isclosed={place.is_closed}
            image={place.images[0].image}
            address={place.address}
            title={place.title}
            description={place.description}
          />
        ))}
      </Card.Group>
      <ModalMap
        openModal={openModal}
        closeModal={closeModal}
        modalMapData={modalMapData}
      />
    </React.Fragment>
  );
};

export default withRouter(ListPlaces);
