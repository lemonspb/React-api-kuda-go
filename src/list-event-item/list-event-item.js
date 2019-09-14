import React,{ useEffect, useState } from 'react';
import './list-event-item.css';

const ListItem = ({name,description,image, placeTitle,id, onItemSelected})=>{




return (
<div className='list-item' onClick={() => onItemSelected(id)}>
    <div className = 'list-item__title'>{name}</div>
    <div className='flex'>
    <div  className='list-item__discription' dangerouslySetInnerHTML={{__html:description}}></div>

    <div className='list-item__img'><img src = {image} alt=''/></div>
    </div>
    <div className='list-item__place'><span>Место:&nbsp;</span>{placeTitle}</div>

    </div>
)
}


export default ListItem