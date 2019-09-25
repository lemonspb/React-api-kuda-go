import React, { useEffect, useState } from "react";
import { Loader,Button, } from "semantic-ui-react";
import { withRouter,Link } from "react-router-dom";
import Services from  '../../Services/services'
import Slider from "react-slick";

const PageNews = ({ indexNews, history }) => {

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



const  services = new Services();




  const [loader, setLoaing] = useState(true);

  useEffect(() => {
    getDetailNews(indexNews);
  }, [indexNews]);

  const [detailNews, setDetailNews] = useState([]);

  const getDetailNews = index => {
    const BASE_URL = "https://kudago.com/public-api/v1.4/"

    fetch(`${BASE_URL}/news/${index}/?text_format=text`).then(async response => {
      if (response.status !== 200) {
        return;
      }
      const data = await response.json();
      setDetailNews(data);
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
        <h2 className="page__header">{detailNews.title}</h2>
 <Slider {...settingsSlider} className='page__slider'>
          {detailNews.images.map((img, i) => (
            <div className="page__img page-img" key={i}> 
              <img src={img.image} className="page-img__image" alt="" />
            </div>
          ))}
        </Slider>


             <div className="page__description">{detailNews.body_text}</div>
{services.timeConverter(detailNews.publication_date)}
        </div>
    </React.Fragment>
  );
};

export default withRouter(PageNews);
