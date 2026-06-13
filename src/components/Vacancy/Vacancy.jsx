import React from 'react'
import classes from './Vacancy.module.scss'

const Vacancy = ({profession, info, worker, student}) => {
  return (
    <div className={classes.listings}>
        <div className={classes.vacancy}>
          <h6>{profession}</h6>
          <p className={classes.info}>{info}</p>
          <div className={classes.worker}>
            <p>{worker}</p>
            <p>после обучения</p>
          </div>
          <div className={classes.student}>
            <p>{student}</p>
            <p>во время обучения</p>
          </div>
        </div>
    </div>
  )
}

export default Vacancy