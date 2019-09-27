import React from 'react';
import { Card, Image,Rating } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const CardFilms = ({rating,poster,title,description,id}) => {



  return (
    <Card>
    <Image src={poster} wrapped ui={false} />
    <Card.Content>
          

          <Card.Header><Link to={`/film/${id}`}>{title} </Link></Card.Header>

      <Card.Description>
      {description}
      </Card.Description>
    </Card.Content>
    <Card.Content>
     <Card.Meta>
      <Rating icon='star'  maxRating={10}  rating={rating} disabled/>
         {rating}
      </Card.Meta>
     
    </Card.Content>
  </Card>
  )


}

export default CardFilms;

