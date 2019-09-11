import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ListPlace from '../list-place';
import List from "../list-event";
import CartEvent from '../cart-event';
import Header from '../header';
import Spinner from '../spinner';
import './app.css';

const App = () => {
  



  return (
      <Router>
          <div  className='app'>
            <Header />
          <div className='container'>   
      
              <Route  path='/events/' exact component ={List} />  
              <Route  path='/place/' exact component ={ListPlace} />  

              <Route  path='/events/:id' render={({match})=>  <CartEvent selectId={match.params.id}/> }/>  
                   
            </div> 
        
      </div>
     </Router>
  );
};

export default App;