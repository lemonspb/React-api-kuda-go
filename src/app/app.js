import React,{useState, useEffect} from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ListPlace from '../list-place';
import List from "../list-event";
import ListFilm from "../list-film";
import CartEvent from '../cart-event';
import Header from '../header';
import SelectCity from '../select-city';
import './app.css';

const App = () => {
  
  const  [ citySlug, setCitySlug] = useState([]);
  const  [ newDate, setNewDate] = useState('');
  
  const cityName = JSON.parse(localStorage.getItem("storageCity")) 

 
  function addCity( slug,name ) {
    let cityStorage = JSON.parse(localStorage.getItem("storageCity")) || {};
    cityStorage = {slug,name};
    localStorage.setItem("storageCity", JSON.stringify(cityStorage));
  }

const getate = (date)=>{
  setNewDate(Date.parse(date).toString().slice(0,-3))
}


 const getSitySlug = (sluga, city)=>{
  addCity(sluga,city)

  setCitySlug([sluga, city])

  }



  return (
      <Router>
          <div  className='app' >
          {cityName? <Header datePiker={getate}/>: null}  
          <div className='container'>   
          {}
              <Route  path='/events/' exact  render={()=>  <List setDate={newDate}/> }/>   
              <Route  path='/place/' exact component={ ListPlace } />  
              <Route  path='/films/' exact component={ ListFilm } />  
              <Route  path='/' exact   render={()=>  <SelectCity getSitySlug={getSitySlug}/> }/>  

              <Route  path='/events/:id' render={({match})=>  <CartEvent selectId={match.params.id}/> }/>  
                   
            </div> 
        
      </div>
     </Router>
  );
};

export default App;