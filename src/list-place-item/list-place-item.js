import React,{ useEffect, useState } from 'react';

const ListItemPlace = ({name,description, address, images})=>{




    // useEffect( () => {
    //     getPlace();
      
        
      
      
    // }, [] );
  
    const  [ image, setImage] = useState([]);
    // const getPlace = async()  => {
    //  await fetch(
    //     `${BASE_URL}/places/${placeId}/?fields=title`
    //   ).then(async response => {
    //     if (response.status !== 200) {
    //       return;
    //     }
    //     const data = await response.json();
    //      console.log(data.title)
    //     setPlace(data.title);
    //   });
    // };

 
    


return (
<div className='list-item'>
    <div className = 'list-item__title'>{name}</div>
    <div  className='discription__text' dangerouslySetInnerHTML={{__html:description}}></div>
    <div className = 'list-item__title'>{address}</div>


    </div>
)
}


export default ListItemPlace;