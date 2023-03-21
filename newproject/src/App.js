import './Home/scss/main.scss'
import Section from './Home/Section';
import Tovar from './Home/Tovar';
import Header from './Home/Header/Header';
import Hero from './Home/Hero/Hero';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Section />
      <Tovar />
    </div>
  );
}

export default App;
