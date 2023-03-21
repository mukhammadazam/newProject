import './Home/scss/main.scss'
import Section from './Home/Section';
import Tovar from './Home/Tovar';
import Header from './Home/Header/Header';
import Hero from './Home/Hero/Hero';
import Help from './Home/Help/Help';
import Comunecat from './Home/Comunecat';
import News from './Home/News';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Section />
      <Tovar />
      <Help/>
      <Comunecat />
      <News />
    </div>
  );
}

export default App;
