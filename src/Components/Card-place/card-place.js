import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './card-place.scss'
const CardPlace = ({image,address,title,description,isclosed,id,openMap}) => {
  CardPlace.defaultProps = {
    title:'',
    address: '',
    description:'',
    isclosed: false,
    image: 'https://www.palladiumhotelgroup.com/_ui/responsive/theme-palladium/images/default-img.png',
  };
  CardPlace.propTypes = {
    title: PropTypes.string,
    address: PropTypes.string,
    description: PropTypes.string,
    isclosed:PropTypes.bool,
    image: PropTypes.node,

  };
 


  return (
    <Card>
    <Image src={image} wrapped ui={false} />
    
    <Card.Content>
   <Card.Header>
      <Link to={`/place/${id}`} className='card-place__header link-color' >{title}</Link>
      </Card.Header>
      <Card.Meta>
        <span className='close'>{isclosed?'Закрыто':'Открыто'}</span>
      </Card.Meta>
      <Card.Description>
       {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra onClick={()=> openMap(id)} >
        <Icon name='map marker alternate' />
     <span className='link-color'> {address} </span>
    </Card.Content>
  </Card>
  )


}

export default CardPlace;
