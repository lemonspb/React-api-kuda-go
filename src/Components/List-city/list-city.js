import React, { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import './list-city.scss'
import { Header,List } from 'semantic-ui-react'
import { withRouter } from "react-router-dom";

const ListCity = ({getSityNameSlug}) => {
  
useEffect(() => {
        getCityList()       
}, []);
  
    const  [ cityList, setCityList] = useState([]);
  
     
  
    const getCityList = () => {
    
    const BASE_URL = "https://kudago.com/public-api/v1.4/";

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
<React.Fragment>
    <Header as='h2'> Выберите город </Header>
  
    <List className='city-list'>   
{cityList.map(({name, slug})=>(
  <List.Item as='a' key={slug}  className='city-list__item'>
      <List.Icon name='marker' />
      <List.Content>
      <Link to='/places/page/1'  onClick={()=>{getSityNameSlug(slug, name)}}>
{name}
</Link>
      </List.Content>
    </List.Item>

))}

</List>
</React.Fragment>
  );
};

export default withRouter(ListCity);