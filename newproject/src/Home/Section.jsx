import png from "./imges/mexmonxonaa.png";
import png1 from "./imges/eshiklar.png";
const Section = () => {
  return (
    <>
      <div className="container">
        <div className="row row1 gap-5 gap-xl-0 justify-content-center">
          <div className="col-12   m-sm-0 col-xl-6 justify-content-xl-between">
            <div className="card">
              <img className="img" src={png} alt="mexmonxona" />
              <h3 className="row__title">Двери на заказ</h3>
              <p className="row__text">
                На собственной фабрике мы создаем красивые, безопасные и
                практически вечные двери, межкомнатные перегородки, стеновые
                панели и другие решения для вашего интерьера.
              </p>
              <a
                href="https://www.prom.uz/uz/section/dveri-mezhkomnatnye/"
                className="row__link text-decoration-none"
              >
                заказать уникальную дверь
              </a>
            </div>
          </div>
          <div className="col-12   m-sm-0 col-xl-6 justify-content-xll-between">
            <div className="card">
              <img className="img" src={png1} alt="mexmonxona" />
              <h2 className="row__title">Двери на заказ</h2>
              <p className="row__text">
                На собственной фабрике мы создаем красивые, безопасные и
                практически вечные двери, межкомнатные перегородки, стеновые
                панели и другие решения для вашего интерьера.
              </p>
              <a
                href="https://www.prom.uz/uz/section/dveri-mezhkomnatnye/"
                className="row__link text-decoration-none"
              >
                заказать уникальную дверь
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
