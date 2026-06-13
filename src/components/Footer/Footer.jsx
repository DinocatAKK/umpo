import React from 'react'
import classes from './Footer.module.scss'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()

  return (
    <div className={classes.footer}>
        <h1>Контакты</h1>
        <div className={classes.contacts}>
            <p className={classes.frame}>ПАО «ОДК-УМПО»</p>
            <div className={classes.frame}>
                <p>Отдел кадров:</p>
                <p>+7 (347) 238-65-72 </p>
                <p>+7 (347) 239-56-95 </p>
                <p>+7 (919) 600-28-14</p>
            </div>
            <div className={classes.frame}>
                <p>Приемная:</p>
                <p>+7 (347) 267-77-77</p>
            </div>
            <div className={classes.frame}>
                <p>г. Уфа, ул. Ферина 2</p>
                <p>umpo@umpo.ru</p>
            </div>
            <div className={classes.navigation}>
                <div className={classes.icons}>
                    <img src="/img/Footer/max.svg" alt="icons" />
                    <img src="/img/Footer/vk.svg" alt="icons" />
                    <img src="/img/Footer/telegram.svg" alt="icons" />
                    <img src="/img/Footer/gmail.svg" alt="icons" />
                </div>
                <nav>
                    <a onClick={() => navigate("/")} href="">Главная</a>
                    <a onClick={() => navigate("/career")} href="">Карьера</a>
                    <a onClick={() => navigate("/news")} href="">Пресс-центр</a>
                </nav>
            </div>
        </div>
        <hr />
        <p className={classes.deep}>2026 © АО «Объединённая двигателестроительная корпорация»</p>
    </div>
  )
}

export default Footer