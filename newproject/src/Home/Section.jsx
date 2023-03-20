import png from "./imges/mexmonxonaa.png";
import png1 from "./imges/eshiklar.png";
const Section = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 justify-content-lg-between">
            <img src={png} alt="mexmonxona" />
            <h2 className="row__title">
            Двери на заказ
            </h2>
            <p className="row__text">
            На собственной фабрике мы создаем красивые, безопасные и практически вечные двери, межкомнатные перегородки, стеновые панели и другие решения для вашего интерьера.
            </p>
            <a href="https://www.prom.uz/uz/section/dveri-mezhkomnatnye/" className="row__link">заказать уникальную дверь</a>
          </div>
          <div className="col-12 col-lg-6 justify-content-lg-between">
            <img src={png1} alt="mexmonxona" />
            <h2 className="row__title">
            Двери на заказ
            </h2>
            <p className="row__text">
            На собственной фабрике мы создаем красивые, безопасные и практически вечные двери, межкомнатные перегородки, стеновые панели и другие решения для вашего интерьера.
            </p>
            <a href="https://www.prom.uz/uz/section/dveri-mezhkomnatnye/" className="row__link">заказать уникальную дверь</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
