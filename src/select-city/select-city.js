import React, { useState,useEffect }from "react";
import { Link } from 'react-router-dom'
import './select-city.css'
const SelectCity = ({getSitySlug}) => {
  
    const BASE_URL = "https://kudago.com/public-api/v1.4/";




    useEffect(() => {
        getCityList()
        
      
    }, []);
  
    const  [ cityList, setCityList] = useState([]);
  
     
  
    const getCityList = () => {
      fetch(
        `${BASE_URL}/locations/?lang=ru`
      ).then(async response => {
        if (response.status !== 200) {
          return;
        }
        const data = await response.json();
  
     setCityList(data);
  
        console.log(data)
      });
  
  
  
    };


  return (
<div className='city-list'>
    <h2> Выберите город </h2>
{cityList.map(({name, slug})=>(
    
<Link to='/events/' key={slug} className='city-list__item' onClick={()=>{getSitySlug(slug, name)}}>{name}</Link>
))}

</div>
  );
};

export default SelectCity;