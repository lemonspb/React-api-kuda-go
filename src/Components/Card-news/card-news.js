import React from 'react'
import {  Item } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Services from  '../../Services/services'



const CardNews = ({title, date,description,image,id }) =>{
const  services = new Services();
return (
<Item>
      <Item.Image size='small' src={image} />
      
            <Item.Content>
              <Item.Header> <Link to={`/news/${id}`} className='link-color'>{title}</Link></Item.Header>
              <Item.Meta>
                <span className='stay'>{services.timeConverter(date)}</span>
              </Item.Meta>
              <Item.Description>{description}</Item.Description>
            </Item.Content>
            
          </Item>
            
      )

}





export default CardNews