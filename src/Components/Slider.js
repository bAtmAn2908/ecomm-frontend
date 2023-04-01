// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import '../css/Slider.css'
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { EffectFade, Pagination, Navigation } from 'swiper';

// export const Slider = () => {
//   return (
//     <div className="container" id='con' >
//     <Swiper
//       // effect={'coverflow'}
//       // grabCursor={true}
//       // centeredSlides={true}
//       // loop={true}
//       // slidesPerView={'auto'}
//       // coverflowEffect={{
//       //   rotate: 0,
//       //   stretch: 0,
//       //   depth: 100,
//       //   modifier: 2.5,
//       // }}

//       // pagination={{ el: '.swiper-pagination', clickable: true }}
//       // navigation={{
//       //   nextEl: '.swiper-button-next',
//       //   prevEl: '.swiper-button-prev',
//       //   clickable: true,
//       // }}
//       spaceBetween={30}
//       effect={"fade"}
//       navigation={true}
//       pagination={{
//         clickable: true,
//       }}
//       modules={[EffectFade, Pagination, Navigation]}
//       className="swiper_container"
//     >
//       <SwiperSlide>
//         <img src={"https://m.media-amazon.com/images/I/81gK08T6tYL._AC_SL1500_.jpg"} alt="slide_image" id='slider' />
//       </SwiperSlide>
//       {/* <div>Hello</div> */}
//       {/* style={{height:665 , width:1400} */}
//       <SwiperSlide>
//         <img src={"https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_SL1500_.jpg"} alt="slide_image"id='slider' />
//       </SwiperSlide>
//       <div className="slider-controler">
//         <div className="swiper-button-prev slider-arrow">
//           <ion-icon name="arrow-back-outline"></ion-icon>
//         </div>
//         <div className="swiper-button-next slider-arrow">
//           <ion-icon name="arrow-forward-outline"></ion-icon>
//         </div>
//         <div className="swiper-pagination"></div>
//       </div>
//     </Swiper>
//     <div class="container">
//       <div class="row">
//         <div class="col-xl-6 col-lg-6 col-md-7 mx-auto">
//           <div class="slider-content-2 slider-animated-1">
//             <h3 class="animated">Sale Off 40%</h3>
//             <h1 class="animated">Summer Offer <br></br>2020 Collection
//             </h1>
//             <div class="slider-btn btn-hover">
//               <a class="animated" href="/shop-grid-standard">SHOP NOW</a>
//               </div>
//               </div>
//               </div>
//               </div>
//               </div>
//   </div>
//   )
// }

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import '../css/Slider.css'

// import required modules
import { Pagination } from "swiper";

export const Slider = () => {
  return (
    <div>
       <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_SL1500_.jpg" id='slider'></img></SwiperSlide>
        <SwiperSlide><img src="https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_SL1500_.jpg" id='slider'></img></SwiperSlide>
        <SwiperSlide><img src="https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_SL1500_.jpg" id='slider'></img></SwiperSlide>
      </Swiper>
    </>
    </div>
  )
}
