import React from 'react'
import profile from '../assets/WhatsApp Image 2025-08-26 at 03.31.30.jpeg'
import { Link } from 'react-router-dom'

const AboutMe = () => {
  return (
    <div id='about_me' className='border-b-1 border-[rgba(72,72,72,1)] py-7'>
        <div className='w-[90%] md:w-10/12 mx-auto container'>
            <div className='flex flex-col md:flex-row-reverse md:justify-between py-2 md:py-10 gap-10 md:pb-[100px] lg:pb-[200px]'>
                <div className='flex flex-col md:w-[60%]'>
                    <p className='hidden text-white md:block md:text-md lg:text-2xl'>I am a full-stack web developer based in Nigeria.</p>
                    <p className='hidden md:block text-white md:text-md lg:text-2xl'>I have a background in Basic Medical Sciences.</p>
                    <p className='text-[12px] md:text-md lg:text-[14px] text-[rgba(199,199,199,1)] py-3'>I am a full-stck web developer based in Nigeria. I have a background in Basic Medical science. I am looking for an opportunity to grow, challenge myself and become better. I am also a goal-getter and i have a "never-give-up" mentality.</p>
                    <Link to='/About'><p className='text-[rgba(211,233,122,1)] border-b-1 border-[rgba(211,233,122,1)] w-[110px] lg:w-[160px] text-[12px] md:text-md lg:text-lg pt-4'>MORE ABOUT ME</p></Link>
                </div>
                <div className='md:w-[40%]'>
                    <h1 className='hidden md:block text-5xl lg:text-6xl'>ABOUT ME</h1>
                    <span className='md:hidden'><img className='rounded-md' src={profile} alt="" /></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe