import React from 'react'
import classes from './AboutUs.module.scss'

const AboutUs = () => {
  return (
    <div className={classes.aboutUs}>
        <div className={classes.text}>
            <h1>ПАО «ОДК-УМПО»</h1>
            <hr />
            <p>Публичное акционерное общество «ОДК-Уфимское моторостроительное производственное объединение» (ПАО «ОДК-УМПО») – разработчик и производитель авиационных двигателей. Основными видами деятельности являются разработка, производство, сервисное обслуживание и ремонт турбореактивных авиационных двигателей и газоперекачивающих агрегатов, производство и ремонт узлов вертолетной техники.</p>
        </div>
        <img src="/img/AboutUs/AboutUs.svg" alt="aboutUs" />
    </div>
  )
}

export default AboutUs