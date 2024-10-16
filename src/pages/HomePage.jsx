import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import Joblistings from '../components/JobListings'
import View from '../components/View'

const HomePage = () => {
  return (
    <>
    <Hero title='Available React Jobs' subtitle='Time to show off your skills!'/>
    <HomeCards />
    <Joblistings isHome ={ true}/>
    <View />
    </>
  )
}

export default HomePage