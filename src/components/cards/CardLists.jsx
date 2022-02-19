import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { useNavigate } from 'react-router-dom'

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"

import './cardLists.css'

// import required modules
import { FreeMode } from "swiper"

function CardLists({ data, sectionName }) {
  const [datas, setDatas] = useState(data)
  const navigate = useNavigate()

  const posterPrefix = process.env.REACT_APP_IMAGE_PREFIX_URL

  const handleClick = id => {
    if(sectionName === 'movies'){
      return navigate(`/movie/${id}`)
    }
    return navigate(`/tvshow/${id}`)
  }

  return (
    <div className="card-lists position-relative h-100">
      <Swiper
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 10
          },
          1400: {
            slidesPerView: 6,
            spaceBetween: 10
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper w-100"
      >
        {
          datas.map(d => (
            <SwiperSlide className="d-flex flex-column justify-content-center align-items-center" key={d.id} onClick={() => handleClick(d.id)}>
              {d.poster_path && <img src={`${posterPrefix}${d.poster_path}`} alt={d.id} className='card-poster' />}
              <p>{d.title || d.name}</p>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}

export default CardLists;