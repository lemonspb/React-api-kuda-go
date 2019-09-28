import React, { useEffect, useState } from "react";
import { Loader,Button, Embed} from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import Services from  '../../Services/services'
import Slider from "react-slick";

const PageFilm = ({ indexFilm, history }) => {


const  services = new Services();


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
  const [detailFilms, setDetailFilms] = useState([]);

  useEffect(() => {
    getDetailFilms(indexFilm);
  }, [indexFilm]);





  const getDetailFilms = index => {
    const BASE_URL = "https://kudago.com/public-api/v1.4/"
    const NO_CORS  = "https://cors-anywhere.herokuapp.com/";

    fetch(`${NO_CORS}${BASE_URL}/movies/${index}/?text_format=text`).then(async response => {
      if (response.status !== 200) {
        return;
      }
      const data = await response.json();
      setDetailFilms(data);
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
    <Button onClick={()=>{history.goBack()}}>Назад</Button>

      <div className="page">
        <h2 className="page__header">{detailFilms.title}</h2>
 <Slider {...settingsSlider} className='page__slider'>
          {detailFilms.images.map((img, i) => (
            <div className="page__img page-img" key={i}> 
              <img src={img.image} className="page-img__image" alt="" />
            </div>
          ))}
        </Slider>


             <div className="page__description">{detailFilms.body_text}</div>
             <div className='page__video'>
          <Embed
    defaultActive={true}
    autoplay={true}
    id={`${services.filmUrl(detailFilms.trailer)}`}
    source='youtube'
  />
  </div>
        </div>

    </React.Fragment>
  );
};

export default withRouter(PageFilm);
