import React, {useEffect, useState} from 'react';
import './cart-event.css'

const CartEvent = ({selectId})=>{
    const BASE_URL = "https://kudago.com/public-api/v1.4/";

    useEffect(() => {
      getEventsId();
    },[]);
  
    const  [ idEvents, setIdEvents] = useState({});
    const getEventsId = () => {
      fetch(
        `${BASE_URL}/events/${selectId}/`
      ).then(async response => {
        if (response.status !== 200) {
          return;
        }
        const data = await response.json();
  
        setIdEvents(data);
        console.log(data)
      });
    };
  

  
    

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