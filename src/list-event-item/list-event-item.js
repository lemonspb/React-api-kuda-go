import React,{ useEffect, useState } from 'react';
import './list-event-item.css';

const ListItem = ({name,description,image, placeId,id, onItemSelected})=>{



  const BASE_URL = "https://kudago.com/public-api/v1.4/";

    useEffect( () => {
      if(!placeId){
        getPlace();
      }
        
      
      
    }, [] );
  
    const  [ place, setPlace] = useState('');
    const getPlace = async()  => {
     await fetch(
        `${BASE_URL}/places/${placeId}/?fields=title`
      ).then(async response => {
        if (response.status !== 200) {
          return;
        }
        const data = await response.json();
         console.log(data.title)
        setPlace(data.title);
      });
    };

return (
<div className='list-item' onClick={() => onItemSelected(id)}>
    <div className = 'list-item__title'>{name}</div>
    <div className = 'list-item__discription'>
    <div  className='discription__text' dangerouslySetInnerHTML={{__html:description}}></div>
    </div>

    <div className='list-item__img'><img src = {image} alt=''/></div>
    
    <div className='list-item__place'><span>Место: </span>{place}</div>

    </div>
)
}


export default ListItem