import React from 'react'
import classes from './Vacancies.module.scss'

const Vacancies = () => {
  return (
    <div className={classes.vacancies}>
        <div className={classes.info}>
            <div className={classes.text}>
                <h1>Вакансии</h1>
                <hr />
                <p> <span>ПАО «ОДК-УМПО»</span> приглашает квалифицированных  производственных рабочих и инженеров на постоянную работу.</p>
                <p>Предприятие является разработчиком и крупнейшим производителем авиационных двигателей в России. ОДК-УМПО загружено заказами сейчас и в перспективе, поэтому активно расширяет производство и привлекает новые кадры.</p>
                <p><span>450039, Башкортостан, г. Уфа, ул. Сельская Богородская, 6/1, корпус 2, здание отдела кадров ОДК-УМПО.</span></p>
                <p>Время работы: <span>08:00 – 16:50</span>, обеденный перерыв <span>11:45 – 12:35</span></p>
                <p>тел.: <span>8 (347) 239-56-95</span> </p>
            </div>
            <div className={classes.terms}>
                <h4>Условия:</h4>
                <div className={classes.condition}>
                    <img src="/img/Vacancies/condition.svg" alt="condition" />
                    <p>стабильная <span>«белая»</span> зарплата;</p>
                </div>
                <div className={classes.condition}>
                    <img src="/img/Vacancies/condition.svg" alt="condition" />
                    <p><span>бесплатное 10 месяжное обучение</span> профессии с нуля;</p>
                </div>
                <div className={classes.condition}>
                    <img src="/img/Vacancies/condition.svg" alt="condition" />
                    <p><span>официальное</span> трудоустройство;</p>
                </div>
                <div className={classes.condition}>
                    <img src="/img/Vacancies/condition.svg" alt="condition" />
                    <p><span>премия</span> за план;</p>
                </div>
                <div className={classes.condition}>
                    <img src="/img/Vacancies/condition.svg" alt="condition" />
                    <p><span>оплачиваемые</span> отпуска и больничные;</p>
                </div>
                <div className={classes.condition}>
                    <img src="/img/Vacancies/condition.svg" alt="condition" />
                    <p>иногородним — <span>общежитие или компенсация за аренду</span> жилья 13 000 р;</p>
                </div>
                <div className={classes.condition}>
                    <img src="/img/Vacancies/condition.svg" alt="condition" />
                    <p><span>арендный дом</span> для своих сотрудников;</p>
                </div>
                <div className={classes.condition}>
                    <img src="/img/Vacancies/condition.svg" alt="condition" />
                    <p><span>«подъемные»</span> после армии;</p>
                </div>
                <div className={classes.condition}>
                    <img src="/img/Vacancies/condition.svg" alt="condition" />
                    <p><span>льготное</span> горячее питание;</p>
                </div>
                <div className={classes.condition}>
                    <img src="/img/Vacancies/condition.svg" alt="condition" />
                    <p><span>отдых для детей</span> сотрудников в лагерях РБ;</p>
                </div>
            </div>
        </div>
        <img src="/img/Vacancies/info.svg" alt="info" />
    </div>
  )
}

export default Vacancies