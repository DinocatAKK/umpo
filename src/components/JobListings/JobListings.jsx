import React, { useState } from 'react'
import classes from './JobListings.module.scss'
import Vacancy from '../Vacancy/Vacancy'

const JobListings = () => {

  const [job, setJob]=React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`https://67175d47b910c6a6e027bb35.mockapi.io/items`)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setJob(json);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
  },[]);

  if (isLoading){
    return(
      <div>Загрузка идёт...</div>
    )
  } 

  return (
    <div className={classes.jobListings}>
      <h1>Список вакансий</h1>
      <div className={classes.listings}>
         {Array.isArray(job) && job.map((obj) => <Vacancy key={obj.id} {...obj}/>)}
      </div>
    </div>
  )
}

export default JobListings