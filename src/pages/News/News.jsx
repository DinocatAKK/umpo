import React from 'react'
import classes from './News.module.scss'
import Report from '../../components/Report/Report'

const News = () => {

  return (
    <div className={classes.news}>
      <Report/>
    </div>
  )
}

export default News