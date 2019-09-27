import React, { useEffect, useState } from "react";
import { Loader,Button, } from "semantic-ui-react";
import Slider from "react-slick";
import "./page-place.scss";
import GoogleMap from "../GoogleMap";
import AccordionCard from '../Accordion'
import { withRouter } from "react-router-dom";
const PagePlace = ({ indexPlace, history }) => {


  const settingsSlider = {
    arrow:true,
    dots: true,
    infinite: true,
    centerMode: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const style = {
    width: '50%',
    height: '50vh'
  }

  const [loader, setLoaing] = useState(true);

  useEffect(() => {
    getDetailPlace(indexPlace);
  }, [indexPlace]);

  const [detailPlaces, setDetailPlaces] = useState([]);

  const getDetailPlace = index => {
    const BASE_URL = "https://kudago.com/public-api/v1.4/"

    fetch(`${BASE_URL}/places/${index}/?text_format=text`).then(async response => {
      if (response.status !== 200) {
        return;
      }
      const data = await response.json();
      setDetailPlaces(data);
      setLoaing(false);

      console.log(data);
    });
  };
 

  if(loader){
    return(
      <Loader active={loader} size='medium'>Загрузка</Loader>
      )
  }

  return (
    <React.Fragment>
    <Button onClick={()=>{history.goBack()}}> назад</Button>
      <div className="page">
        <h2 className="page__header">{detailPlaces.title}</h2>
{detailPlaces.images?<Slider {...settingsSlider} className='page__slider'>
          {detailPlaces.images.map((img, i) => (
            <div className="page__img page-img " key={i}> 
              <img src={img.image} className="page-img__image" alt="" />
            </div>
          ))}
        </Slider>:''}
        
        <div className="page__description">{detailPlaces.body_text}</div>
        <div className='page__bottom'>
        <AccordionCard  className='page__accordion'address={detailPlaces.address}
        subway ={detailPlaces.subway}
        timetable= {detailPlaces.timetable}
        phone ={detailPlaces.phone}
        />
        <GoogleMap
          style={style}
          center={detailPlaces.coords}
          title={detailPlaces.title}
          address={detailPlaces.address}
          metro = {detailPlaces.subway}
          image = {detailPlaces.images}
        />
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(PagePlace);
