import React,{ useEffect, useState } from 'react';
import ListItemPlace from '../list-place-item'
import Spinner from '../spinner'

const ListPlace = ()=>{


  const BASE_URL = "https://kudago.com/public-api/v1.4/";




  useEffect(() => {
    getPlace();
    
    
  }, []);

  const  [ places, setPlace] = useState([]);
  const  [ loading , setLoaing] = useState(true);

  const getPlace = () => {
    fetch(
      `${BASE_URL}/places?fields=id,title,address,images,description&expand=place&lang=ru&location=nsk`
    ).then(async response => {
      if (response.status !== 200) {
        return;
      }
      const data = await response.json();

      setPlace(data.results);
      setLoaing(false)
      console.log(data.results)
    });



  };
  if(loading){
    return <Spinner />
    
      }

return (

  <div className='list-wrap'>
    <h2 className ='title'> Места </h2>
{places.map( (place) =>(

    <ListItemPlace  name= { place.title } address = { place.address } description={place.description}  key={place.id} image={place.images}/>

))}
</div>
)


}


export default ListPlace