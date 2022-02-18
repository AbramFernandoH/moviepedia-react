import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"

import './cardLists.css'

// import required modules
import { FreeMode } from "swiper"

function CardLists() {
  return (
    <div className="card-lists position-relative h-100">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper w-100"
      >
        <SwiperSlide className="d-flex justify-content-center align-items-center">Slide 1</SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center align-items-center">Slide 2</SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center align-items-center">Slide 3</SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center align-items-center">Slide 4</SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center align-items-center">Slide 5</SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center align-items-center">Slide 6</SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center align-items-center">Slide 7</SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center align-items-center">Slide 8</SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center align-items-center">Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CardLists;