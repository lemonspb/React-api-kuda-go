import React, {useEffect, useState} from 'react';
import './cart-event.css'
import Spinner from '../spinner'
import GoogleMapReact from 'google-map-react';

import Slider from "react-slick";

const CartEvent = ({selectId})=>{
    const KEY_MAP = 'AIzaSyCU9MTC1valF9nap3DwKA3OBSyTCukvolc';
    const BASE_URL = "https://kudago.com/public-api/v1.4/";
    const AnyReactComponent = ({text}) => <div className='custom-marker'>{text}</div>;
    const settingsSlider = {
      dots: true,
      infinite: true,
      centerMode: true,
      autoplay:true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    useEffect(() => {
      async  function  getEventsId(){
       await fetch(
          `${BASE_URL}/events/${selectId}/?expand=place`
        ).then(async response => {
          if (response.status !== 200) {
            return;
          }
          const data = await response.json();
    
          setIdEvents(data);
          setLoaing(false)
          console.log(data)
        });


      };
      getEventsId()
    },[]);
  
    const  [ idEvents, setIdEvents] = useState({});
    const  [ loading , setLoaing] = useState(true);

    if(loading){
      return <Spinner />
      
        }
    

return (
<div className='cart-item'>
    <div className = 'cart-item__title'>{idEvents.title}</div>
    <div className = 'cart-item__title'></div>
    <div className = 'cart-item__price'><span>цена:  </span> {idEvents.price || 'бесплатно'}</div>
    <div className='cart-item__images'>  
       <Slider {...settingsSlider}>
        {idEvents.images.map((img)=>(
          <div className='cart-item__image' key={img.source.name}><img src = {img.image} alt=''/></div>

    ))}
    </Slider>
    </div>

    <div className='cart-item__text' dangerouslySetInnerHTML={{__html:idEvents.body_text}}></div>
    <div className = 'cart-item__age'><span>Возрастное ограничение: </span> {idEvents.age_restriction? idEvents.age_restriction : 'отсутсвует'}</div>

    <div  className='map-container'>
    <GoogleMapReact
          bootstrapURLKeys={{ key: KEY_MAP }}
          defaultCenter={{lat: idEvents.place.coords.lat, lng: idEvents.place.coords.lon}}
          defaultZoom={ 17 }>
            <AnyReactComponent 
             lat={idEvents.place.coords.lat}
             lng={idEvents.place.coords.lon}
            />
        </GoogleMapReact>
    </div>   
 
    </div>

    )


}


export default CartEvent