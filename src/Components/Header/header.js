import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './header.scss'
 const  Header = () =>{
    let cityName = JSON.parse(localStorage.getItem("storageCity"))   
return (
        <Menu pointing secondary className='header-nav'>
          
          <NavLink to='/events/page/1' className='header-nav__item'>
          <Menu.Item
          name='События'
       />
          
          </NavLink>
          
         <NavLink to='/places/page/1' className='header-nav__item'>
         <Menu.Item
          name='Места'
       />
         </NavLink>
         <NavLink to='/news/page/1' className='header-nav__item'>
         <Menu.Item
          name='Новости'
       />
           </NavLink>
         <NavLink to='/films/' className='header-nav__item'>
         <Menu.Item
          name='Фильмы'
       />
                </NavLink>  

       <Menu.Menu position='right' className='header-city'>
       <div header-nav__item>Город: <NavLink to='/'>{cityName.name}</NavLink></div>

          </Menu.Menu>
        
        </Menu>

    )
  }

  export default Header