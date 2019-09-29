import  React from 'react';
import  ListPlaces from '../List-places' 
import  Header from '../Header'
import  PagePlace from '../Page-place';
import  PageNews from '../Page-news';
import  PageEvent from '../Page-event';
import PageFilm  from '../Page-film';
import  ListCity from '../List-city';
import  ListNews from '../List-news';
import  ListFilms from '../List-films'
import  ListEvents from '../List-events'
import { Container } from 'semantic-ui-react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';

const App = ()=>{
  


 

  let cityName = JSON.parse(localStorage.getItem("storageCity"));
   function saveCity( slug, name ) {
  localStorage.setItem("storageCity", JSON.stringify({ slug, name }));

  }
  const getSityNameSlug = (slug, city)=>{
    saveCity(slug,city)

   }



return (
 <BrowserRouter>    
<div>
{cityName?<Header/>:null}


<Container className='container'>
<Switch>
<Route  path='/place/:id' exact render={({match})=>  <PagePlace indexPlace={match.params.id}  /> }/> 
<Route  path='/places/page/:number'  exact render={({match})=> <ListPlaces page={match.params.number} /> }/>   
</Switch>

<Switch>
<Route  path='/news/:id' exact render={({match})=>  <PageNews indexNews={match.params.id} /> }/> 
<Route  path='/news/page/:number'  exact render={({match})=> <ListNews page={match.params.number}/> }/>   
</Switch>

<Switch>
<Route  path='/events/page/:number'  exact render={({match})=> <ListEvents page={match.params.number}/> }/>   
<Route  path='/event/:id'  exact render={({match})=> <PageEvent indexEvent={match.params.id} /> }/>   

</Switch>
<Route  path='/film/:id' exact render={({match})=>  <PageFilm indexFilm={match.params.id}  /> }/> 

<Route  path='/films/page/:number'  exact render={({match})=> <ListFilms page={match.params.number}/> }/>   

<Route  path='/' exact render={()=>  <ListCity getSityNameSlug={getSityNameSlug} /> }/> 

</Container>

</div>
 </BrowserRouter>

)    
}


export default App;




  



