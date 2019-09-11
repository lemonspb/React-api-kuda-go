import React,{ useEffect, useState } from 'react';
import './list-event-item.css';

const ListItem = ({name,description,image, placeName,id, onItemSelected})=>{




return (
<div className='list-item' onClick={() => onItemSelected(id)}>
    <div className = 'list-item__title'>{name}</div>
    <div className = 'list-item__discription'>
    <div  className='discription__text' dangerouslySetInnerHTML={{__html:description}}></div>
    </div>

    <div className='list-item__img'><img src = {image} alt=''/></div>
    
    <div className='list-item__place'><span>Место: </span>{placeName}</div>

    </div>
)
}


export default ListItem