import React from 'react'
import logo from './logo.svg'
import style from './hero.module.css'
function Hero() {
  return (
    <div className={style.hero}>
        <img src={logo} className={style.logo} alt="logo" />
        <input className={style.input} type="text" placeholder='Введите код компонента / Write code component' />
        <button className={style.btn}>Render</button>
    </div>
  )
}

export default Hero