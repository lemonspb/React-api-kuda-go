    import React,{useState,useEffect} from 'react';
    import { Menu, Icon } from 'semantic-ui-react';
    import { NavLink,withRouter } from 'react-router-dom';
    import './header.scss'


    const  Header = ({history}) =>{
        let cityName = JSON.parse(localStorage.getItem("storageCity"))   

        useEffect(()=>{handleItemClick(history.location.pathname)},[history.location.pathname])

        const [activeItem, setActiveItem] = useState('')

        const handleItemClick = (item) => {
        if(item.includes('events')){
            setActiveItem('События')
        }
        if(item.includes('places')){
            setActiveItem('Места')
        }
        if(item.includes('news')){
            setActiveItem('Новости')
        }
        if(item.includes('films')){
            setActiveItem('Фильмы')
        }
        }



    return (
            <Menu  stackable pointing secondary className='header-nav'>

            <NavLink   to='/events/page/1'>

            <Menu.Item 
            className='header-nav__item'
            color='red'
            active={activeItem === 'События'}
            name='События' />
            
            </NavLink>
            
            <NavLink to='/places/page/1' >
            <Menu.Item
                    className='header-nav__item'
            color='red'
            active={activeItem === 'Места'}
            name='Места'/>

            </NavLink>

            <NavLink to='/news/page/1'  >
            <Menu.Item
            className='header-nav__item' 
            color='red'
            name='Новости'
            active={activeItem === 'Новости'}/>
            
            </NavLink>

            <NavLink to='/films/page/1'>
            <Menu.Item
            className='header-nav__item'
            color='red'
            name='Фильмы'
            active={activeItem === 'Фильмы'}/>

            </NavLink>  
        <Menu.Menu position='right' className='header-city'>
        
        <div className='header-nav__item'><Icon name='map marker alternate' />Город:&nbsp;<NavLink to='/' className='header-nav__link'>{cityName.name}</NavLink></div> </Menu.Menu>
            
            </Menu>

        )
    }

    export default withRouter(Header)