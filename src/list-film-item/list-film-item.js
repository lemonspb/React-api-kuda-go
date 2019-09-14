import React from 'react';

const ListFilmItem = ({name,poster})=>{






 
    


return (
<div className='list-item'>
    <div className = 'list-item__title'>{name}</div>
    <div  className='list-item__title' ></div>
    <img className = 'list-item__img' src={poster} />

    </div>
)
}


export default ListFilmItem;