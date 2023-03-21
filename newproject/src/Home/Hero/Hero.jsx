import '../scss/main.scss';

const Hero = () => {
  return (
    <div className='heroall'>
        <div className='container'>
            <div className='hero'>
                <div className='hero__main'>
                    <h2 className='hero__main--title'>Classic Wood Stile</h2>
                    <span className='hero__main--span'>enterior-exterior</span>
                    <p className='hero__main--text'>Приглашает к сотрудничеству архитекторов, дизайнеров и строителей</p>
                    <button className='hero__main--button'>подробнее</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;