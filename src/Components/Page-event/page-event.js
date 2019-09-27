import React, { useEffect, useState } from "react";
import { Loader,Button,Icon } from "semantic-ui-react";
import Slider from "react-slick";
import { withRouter} from "react-router-dom";

const PageEvent = ({ indexEvent, history}) => {
  const settingsSlider = {
    arrow:true,
    dots: true,
    infinite: true,
    centerMode: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  

  const [loader, setLoaing] = useState(true);



  useEffect(() => {
  

    getDetailEvent(indexEvent);
  }, [indexEvent]);

  const [detailEvent, setDetailEvent] = useState([]);

  const getDetailEvent = index => {
    const BASE_URL = "https://kudago.com/public-api/v1.4/"

    fetch(`${BASE_URL}events/${index}/?text_format=text`).then(async response => {
      if (response.status !== 200) {
        return;
      }
      const data = await response.json();
      setDetailEvent(data);
      setLoaing(false);

      console.log(data);
    });
  };
 

  if(loader){
    return(
      <Loader active={loader} size='medium'>Загрузка</Loader>
      )
  }

  return (
    <React.Fragment>
      <Button primary animated='fade' onClick={()=>{history.goBack()}}>
      <Button.Content visible>
      Вернуться назад</Button.Content>
      <Button.Content hidden><Icon name='arrow left'></Icon></Button.Content>
    </Button>
    
      <div className="page">
         

       
        <h2 className="page__header">{detailEvent.title}<span className='page__meta'> ({detailEvent.age_restriction})</span></h2>
        <div className='page__price'><span>цена: </span>{detailEvent.price || 'бесплатно'}</div>
        {detailEvent.images?<Slider {...settingsSlider} className='page__slider'>
          {detailEvent.images.map((img, i) => (
            <div className="page__img page-img " key={i}> 
              <img src={img.image} className="page-img__image" alt="" />
            </div>
          ))}
        </Slider>:''}
        
        <div className="page__description">{detailEvent.body_text}</div>
        <div className='page__bottom'>
        
      
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(PageEvent);
