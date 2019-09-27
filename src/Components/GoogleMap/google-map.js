import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Popup,Icon, Image,Item} from 'semantic-ui-react';
import './google-map.scss'
const GoogleMap =({center,title, address,style,image,metro}) => {
    const KEY_MAP = 'AIzaSyCU9MTC1valF9nap3DwKA3OBSyTCukvolc';
    

    const popupContent = () =>(
    <Item>
    {image?<Image src={image[0].image}/>:null}
    
    <Item.Content>
    <Item.Header as='h3'>{title}</Item.Header> 
    <Item.Meta>{address}</Item.Meta>
    {metro?<Item.Meta><Icon name='subway'/>{metro}</Item.Meta>:null}
    </Item.Content>
    </Item>) 


    const Marker = () => <Popup content={popupContent} trigger={<Icon className='marker-img' size='big' name='map marker alternate'/> } />

  GoogleMap.defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };  

 


    return (
      <div style={{ height: style.height, width: style.width }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: KEY_MAP }}
          defaultCenter={{lat: center.lat, lng: center.lon}}
          defaultZoom={15}
        >
        <Marker 
        lat={center.lat}
        lng={center.lon}
        />
            
        </GoogleMapReact>
      </div>
    );
  }


export default GoogleMap;