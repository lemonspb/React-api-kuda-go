import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Services from  '../../Services/services'
import PropTypes from 'prop-types';


const CardEvents = ({place,title,description,image,id,dateEvent}) => {
  CardEvents.defaultProps = {
    dateEvent: null,
    place: null,
    id: null,
    title: null,
    description: null,
    isclosed: false,
    image: 'https://www.palladiumhotelgroup.com/_ui/responsive/theme-palladium/images/default-img.png',
  };
  CardEvents.propTypes = {
    id:PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    isclosed:PropTypes.bool,
    image: PropTypes.node,
    dateEvent: PropTypes.object

  };

const  services = new Services();


return (
    <Card  raised>
    <Image src={image}   wrapped ui={false} />
    <Card.Content>
    <Card.Header >
    <Link to={`/event/${id}`} className='link-color'>{title} </Link>
    </Card.Header>
    {services.timeConverter(dateEvent.end) === '1 Jan 9999'?<Card.Meta>
    <div><Icon name='calendar alternate outline' /> &nbsp;круглый год</div></Card.Meta>:<Card.Meta>
    <div> <Icon name='calendar alternate outline' /> &nbsp;<span>{services.timeConverter(dateEvent.start)}</span>&ndash;<span>{services.timeConverter(dateEvent.end)}</span></div>
    </Card.Meta>}
    <Card.Description>{description}</Card.Description>
    </Card.Content>
    <Card.Content><Icon name='map marker alternate' />
    {place?<Link to={`/place/${place.id}`} className='link-color' >{place.title}</Link>:'где то'}
    </Card.Content>
    </Card>
  )
  }
export default CardEvents;
        
     

