import React, {useEffect, useState} from 'react';
import './cart-event.css'
import Spinner from '../spinner'
import GoogleMapReact from 'google-map-react';

const CartEvent = ({selectId})=>{
    const BASE_URL = "https://kudago.com/public-api/v1.4/";

    useEffect(() => {
    async function getEventsId(){
       await fetch(
          `${BASE_URL}/events/${selectId}/`
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
    <div className='cart-item__img'><img src = {idEvents.images} alt=''/></div>
    <div className='cart-item__text' dangerouslySetInnerHTML={{__html:idEvents.body_text}}></div>
    <div className = 'cart-item__age'><span>Возрастное ограничение: </span> {idEvents.age_restriction? idEvents.age_restriction : 'отсутсвует'}</div>
    </div>

    )


}


export default CartEvent