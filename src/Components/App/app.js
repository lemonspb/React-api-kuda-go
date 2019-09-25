import React,{useState} from 'react';
import ListPlaces from '../List-places' 
import Header from '../Header'
import  PagePlace from '../Page-place';
import  PageNews from '../Page-news';
import  PageEvent from '../Page-event';
import ListCity from '../List-city';
import ListNews from '../List-news';
import ListEvents from '../List-events'
import { Container } from 'semantic-ui-react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';

const App = ()=>{
  
const [newCity, setNewCity] = useState()
const [arrayId, setArrayId] = useState([])

  function saveCity( slug, name ) {
    let cityStorage = JSON.parse(localStorage.getItem("storageCity")) || {};
    cityStorage = {slug,name};
    localStorage.setItem("storageCity", JSON.stringify(cityStorage));

  }
  const getSityNameSlug = (slug, city)=>{
    saveCity(slug,city)
    setNewCity(city)
   }


  
return (
 <BrowserRouter>    
<React.Fragment>
<Header/>
<Container className='container'>
<Switch>
<Route  path='/place/:id' exact render={({match})=>  <PagePlace indexPlace={match.params.id} /> }/> 
<Route  path='/places/page/:number'  exact render={({match})=> <ListPlaces page={match.params.number} /> }/>   
</Switch>

<Switch>
<Route  path='/news/:id' exact render={({match})=>  <PageNews indexNews={match.params.id} /> }/> 
<Route  path='/news/page/:number'  exact render={({match})=> <ListNews page={match.params.number}/> }/>   
</Switch>

<Switch>
<Route  path='/event/:id'  exact render={({match})=> <PageEvent indexEvent={match.params.id}/> }/>   
<Route  path='/events/page/:number'  exact render={({match})=> <ListEvents page={match.params.number}/> }/>   
</Switch>


<Route  path='/' exact render={()=>  <ListCity getSityNameSlug={getSityNameSlug} /> }/> 

</Container>
</React.Fragment>
 </BrowserRouter>

)    
}


export default App;




  


