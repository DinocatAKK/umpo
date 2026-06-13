import React from 'react'
import classes from './Career.module.scss'
import Vacancies from '../../components/Vacancies/Vacancies'
import JobListings from '../../components/JobListings/JobListings'
import Application from '../../components/Application/Application'

const Career = () => {
    return (
    <div className={classes.career}> 
        <Vacancies/>
        <JobListings/>
        <Application/>
    </div>
    )
}

export default Career