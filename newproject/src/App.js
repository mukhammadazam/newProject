import './Home/scss/main.scss'
import Section from './Home/Section';
import Tovar from './Home/Tovar';
import Header from './Home/Header/Header';
import Hero from './Home/Hero/Hero';
import Help from './Home/Help/Help';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Section />
      <Tovar />
      <Help/>
    </div>
  );
}

export default App;
