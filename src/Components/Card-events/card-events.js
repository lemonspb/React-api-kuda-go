import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const CardEvents = ({place,title,description,image,id}) => {



  return (
    <Card>
    <Image src={image} wrapped ui={false} />
    
    <Card.Content>
      <div className='card-place__header'></div>
      <Card.Meta>
     <Link to={`/event/${id}`}>{title} </Link>
      </Card.Meta>
      
      <Card.Description>
      {description}
      </Card.Description>
    </Card.Content>
    <Card.Content>
        <Icon name='map marker alternate' />
      {place?<Link to={`/place/${place.id}`}>{place.title}</Link>:'df'}
    </Card.Content>
  </Card>
  )


}

export default CardEvents;
