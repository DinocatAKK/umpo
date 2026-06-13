import React from 'react'
import classes from './Home.module.scss'
import AboutUs from '../../components/AboutUs/AboutUs'
import Products from '../../components/Products/Products'

const Home = () => {
  return (
    <div className={classes.home}>
      <AboutUs/>
      <Products/>
    </div>
  )
}

export default Home