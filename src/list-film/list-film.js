import React,{ useEffect, useState } from 'react';
import Spinner from '../spinner'
import ListFilmItem from '../list-film-item'
const ListFilm = ()=>{


  const BASE_URL = "https://kudago.com/public-api/v1.4/";



  useEffect(() => {
    getFilms();
    
    
  }, []);

  const  [ filmlist, seFilmlist] = useState([]);
  const  [ loading , setLoaing] = useState(true);

  const getFilms = () => {
    fetch(
      `${BASE_URL}/movies?fields=id,title,description,poster,genres&expand=place&lang=ru&location=nsk`
    ).then(async response => {
      if (response.status !== 200) {
        return;
      }
      const data = await response.json();

      seFilmlist(data.results);
      setLoaing(false)
      console.log(data.results)
    });



  };
  if(loading){
    return <Spinner />
    
      }

return (

  <div className='list-wrap'>
    <h2 className ='title'> Кино </h2>
    {filmlist.map((film)=>(
        <ListFilmItem name={film.title} poster={film.poster.image} discription={film.discription} />
    ))}
     
</div>
)


}


export default ListFilm