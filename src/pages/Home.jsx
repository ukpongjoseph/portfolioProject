import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import AboutMe from '../components/AboutMe'
import Connect from '../components/Connect'

const Home = () => {
  return (
    <div className='py-5'>
        <Nav/>
        <Hero/>
        <Featured/>
        <AboutMe/>
        <Connect/>
    </div>
  )
}

export default Home