import React from 'react'
import DatePicker,{registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Icon } from "semantic-ui-react";
import './date-picker-custom.scss'
import ru from 'date-fns/locale/ru';

const DatePickerCustom = ({selectDate,handleChangeDate}) =>{

registerLocale('ru', ru)


return (
    <div>
    <Icon name='calendar alternate outline' /> 
    &nbsp;
<DatePicker
className='data-picker'
selected={selectDate}
onChange={handleChangeDate}
dateFormat="MMMM d, yyyy"
locale="ru"
/>
</div>
)


}

export default DatePickerCustom;