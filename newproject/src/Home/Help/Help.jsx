import { useState } from 'react';
import '../scss/main.scss';
import HelpImg from './helpbg.png';

const Help = () => {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [error, setError] = useState(false);
    const [blue, setBlue] = useState();
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        if (!firstName || !lastName) {
            setError(true);
        }
        } 
        const handleBlue =()=>{
            return setBlue(!blue);
        }

  return (
    <div className='helpo mt-5 mb-5'>
        <div className="container">
        <div className="help">
            <div className='help-first' >
                    <img src={HelpImg} alt="heroimg" />
            </div>
            <div className='help-second'  >
                <div className='help__main'>
                    <h2 className='help__main--title'>Нужна помощь с выбором?</h2>
                    <p className='help__main--text'>Наши специалисты с радостью помогут Вам, оставьте свой номер телефона!</p>
                    <form className='help__form oksubmit' onSubmit={handleSubmit}>
                        <div className='form__inputs'>
                            <div  className='form__input d-flex flex-column'>
                            <input type="text" className='inputName help__form--name' onChange={e=>setFirstName(e.target.value)} placeholder='Как вас зовут?'/>
                            {
                                error? <label>Enter valid name</label>: ""
                            }
                            </div>
                            <div className='form__input d-flex flex-column'>
                            <input type="number" className='inputNumber help__form--number' onChange={e=>setLastName(e.target.value)} placeholder='Ваш телефон'/>
                            {
                                error? <label>Enter valid number</label>: ""
                            }
                            </div>
                        </div>
                        <button className='help__form--button button' type='Submit' onClick={handleBlue}>Связаться с нами</button>
                    </form>
                </div>
                <div className={`${blue && error? `d-block`: `d-none`} blue`}>
                        <p className='d-flex align-items-center justify-content-center w-100 h-100 p-5 text-light'>Thanks for your submittion. We will call you.</p>
                </div>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default Help;