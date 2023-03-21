import './Home/scss/main.scss'
import Section from './Home/Section';
import Tovar from './Home/Tovar';
import Header from './Home/Header/Header';
import Hero from './Home/Hero/Hero';
import Comunecat from './Home/Comunecat';
import News from './Home/News';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Section />
      <Tovar />
      <Comunecat />
      <News />
    </div>
  );
}

export default App;
