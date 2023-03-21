import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "./imges/eshik.png";
import img1 from "./imges/eshik1.png";
import img2 from "./imges/eshik2.png";
import img3 from "./imges/eshik3.png";
import img4 from "./imges/eshik4.png";
import img5 from "./imges/eshik5.png";
import img6 from "./imges/eshik6.png";
import img7 from "./imges/eshik7.png";
import img8 from "./imges/eshik8.png";
import img9 from "./imges/mebel1.jpg";
import img10 from "./imges/mebel2.jpg";
import img11 from "./imges/mebel3.jpg";
import img12 from "./imges/mebel4.jpg";
import img13 from "./imges/panel1.jpg";
import img14 from "./imges/panel2.jpg";
import img15 from "./imges/panel3.jpg";
import img16 from "./imges/panel4.jpg";
const Tovar = () => {
  const [mebil, setmebil] = useState(false);
  const [panel, setpanel] = useState(false);
  const Mebel = () => {
    setmebil(!mebil);
  };
  const Panel = () => {
    setpanel(!panel);
  };
  return (
    <>
      <div className="container">
        <div className="tovar">
          <h2 className="tovar__title">Витрина товаров</h2>
          <ul className="tovar__list d-flex align-items-center justify-content-center gap-1  flex-wrap">
            <li className="tovar__list-item ">Межкомнатные двери</li>
            <li onClick={Mebel} className="tovar__list-item ">Мебель</li>
            <li onClick={Panel} className="tovar__list-item ">Стеновые панели «Буазери»</li>
            <li className="tovar__list-item ">Лестницы</li>
            <li className="tovar__list-item ">Мебельные фасады</li>
          </ul>
          <div className= {`mb-5  ${ mebil ? 'd-lg-flex' : 'd-none'} justify-content-center align-items-lg-center justify-content-lg-between`} >
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className="swcard"
            >
              <SwiperSlide className="d-flex pt-5 align-items-center card justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">50 000 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img9} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">50 000 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img10} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">50 000 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img11} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">50 000 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img12} alt="img" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className="swcard"
            >
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">50 000 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img10} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">50 000 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img9} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">50 000 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img11} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">50 000 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img12} alt="img" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className="swcard"
            >
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">50 000 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img12} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">50 000 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img9} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img10} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">50 000 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img12} alt="img" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className= {`mb-5  ${ panel ? 'd-lg-flex' : 'd-none'} justify-content-center align-items-lg-center justify-content-lg-between`} >
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className="swcard"
            >
              <SwiperSlide className="d-flex pt-5 align-items-center card justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">50 000 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img13} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">50 000 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img14} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">50 000 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img15} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">50 000 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img16} alt="img" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className="swcard"
            >
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">50 000 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img14} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">50 000 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img13} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">50 000 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img15} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">50 000 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img16} alt="img" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className="swcard"
            >
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">50 000 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img15} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">50 000 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img13} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img14} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">50 000 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img16} alt="img" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className=" mb-5 d-lg-flex justify-content-center align-items-lg-center justify-content-lg-between ">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className="swcard"
            >
              <SwiperSlide className="d-flex pt-5 align-items-center card justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img1} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img2} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img3} alt="img" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className="swcard"
            >
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img1} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img1} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img2} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img3} alt="img" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className="swcard"
            >
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img3} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img1} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img2} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img3} alt="img" />
              </SwiperSlide>
            </Swiper>
          </div>
         
          <div className=" mb-5 d-lg-flex justify-content-center align-items-lg-center justify-content-lg-between ">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className="swcard"
            >
              <SwiperSlide className="d-flex pt-5 align-items-center card justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img3} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img1} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img2} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img3} alt="img" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className="swcard"
            >
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img4} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img4} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img5} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img2} alt="img" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className="swcard"
            >
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img5} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img1} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img2} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img3} alt="img" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className=" mb-5 d-lg-flex justify-content-center align-items-lg-center justify-content-lg-between ">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className="swcard"
            >
              <SwiperSlide className="d-flex pt-5 align-items-center card justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img6} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img1} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img2} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img3} alt="img" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className="swcard"
            >
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img7} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img2} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img3} alt="img" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className="swcard"
            >
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img8} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img7} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img8} alt="img" />
              </SwiperSlide>
              <SwiperSlide className="d-flex pt-5 card align-items-center justify-content-center">
                <div className="position-absolute card__text">
                  <p className="text  pt-5">Sofia Original 50.07</p>
                  <p className="text1 pt-0 ">24 500 ₽</p>
                </div>
                <img className="py-5 pt-5" src={img3} alt="img" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tovar;
