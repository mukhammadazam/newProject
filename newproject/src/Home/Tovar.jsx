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
const Tovar = () => {
  return (
    <>
      <div className="container">
        <div className="tovar">
          <h2 className="tovar__title">Витрина товаров</h2>
          <ul className="tovar__list d-flex align-items-center justify-content-center gap-1  flex-wrap">
            <li className="tovar__list-item ">Межкомнатные двери</li>
            <li className="tovar__list-item ">Мебель</li>
            <li className="tovar__list-item ">Стеновые панели «Буазери»</li>
            <li className="tovar__list-item ">Лестницы</li>
            <li className="tovar__list-item ">Мебельные фасады</li>
          </ul>
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
                <img className="py-5 pt-5" src={img2} alt="img" />
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
                <img className="py-5 pt-5" src={img} alt="img" />
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
