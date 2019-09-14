import React,{useState} from 'react';
import './header.css';
import DatePicker from "react-datepicker";
 import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom'

const Header = ({datePiker})=>{

    const [startDate, setStartDate] = useState(new Date());

    const cityName = JSON.parse(localStorage.getItem("storageCity")) 
   datePiker(startDate)

 
return (
    
<header className='header'>
    <nav className='nav'>
        <Link to='/events/' className='nav__link'>События</Link>
        <Link to='/place/' className='nav__link'>Места</Link>
        <Link to='/news/' className='nav__link'>Новости</Link>
        <Link to='/films/' className='nav__link'>Кино</Link>
  
    </nav>
    <Link to='/' className='nav__link'><span className='tomato'>Ваш город:&nbsp;</span>{cityName? cityName.name: 'fdfd' }</Link>
   <div>
   <span>Выбор даты</span><DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      withPortal
    />
   </div>
   
    </header>
)
}

export default Header;
