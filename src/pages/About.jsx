import React from 'react'
import MainAbout from '../components/MainAbout'
import Connect from '../components/Connect'
import Capabilities from '../components/Capabilities'
import Experience from '../components/Experience'
import Nav1 from '../components/Nav1'

const About = () => {
  return (
    <div>
      <div className='pt-5'><Nav1/></div>
      <MainAbout/>
      <Capabilities/>
      <Experience/>
      <Connect/>
    </div>
  )
}

export default About