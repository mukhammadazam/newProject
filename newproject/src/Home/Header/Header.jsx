import '../scss/main.scss';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './logo.svg';
import Phone from './phone.svg';
import { useState } from 'react';



const Header = () => {

    const [ Qw , setDisplay] = useState();
    const changeDisplay =()=>{
        return setDisplay(!Qw);
    };
  return (
    <Navbar>
      <Container>
        <div className='navigation d-flex align-items-center justify-content-between'>
        <Navbar.Brand href="#home"><img src={Logo} alt="Logo" style={{width: "100%"}} /></Navbar.Brand>
        <ul className={`${Qw ?`d-flex`: `d-none `} menu row d-md-flex`} style={{width: "100%"}}>
            <li className='menu__bar col-6'>
                <ul className='menu__bar--menu'>
                    <li>Доставка</li>
                    <li>Статьи</li>
                    <li>О нас</li>
                    <li>Контакты</li>
                </ul>
            </li>
            <li className='menu__link col-6'>
                <ul className='menu__link--links'>
                    <li className='d-none d-sm-block'>support@sofiadoors.com</li>
                    <li>8 (800) 550-81-79</li>
                </ul>
            </li>
        </ul>
        <button style={{width: "10%"}} className="navigation__button">Каталог</button>
        <img className='d-md-none d-block' src={Phone} alt="phone" />
        <div onClick={changeDisplay} className={`${Qw ? `navigation__toggler`: `navigation__toggler2`} col-1`}>
            <span className='navigation__toggler--span1'></span>
            <span className='navigation__toggler--span12'></span>
        </div>
        </div>
      </Container>
    </Navbar>
  )
}

export default Header;