import React from 'react'
import linkedIn from '../assets/bxl-linkedin.svg.png'
import github from '../assets/bxl-github.svg.png'
import arrow from '../assets/mobileArrow.png'
import dot from '../assets/desktopDot.png'
import profile from '../assets/WhatsApp Image 2025-08-26 at 03.31.30.jpeg'

const Hero = () => {
  return (
    <div className='border-b-1 border-[rgba(72,72,72,1)] py-8'>
        <div className='w-[90%] md:w-10/12 mx-auto container'>
            <div className='flex flex-col md:flex-row md:justify-between gap-4 py-2 md:py-0'>
                <div className='md:my-auto md:w-[45%] flex flex-col gap-4'>
                    <h1 className='text-5xl md:text-6xl lg:text-[80px]'>HI, I AM JOSEPH ANIEKAN.</h1>
                    <p className='text-[rgba(199,199,199,1)] text-[12px] md:text-md lg:text-lg'>A Nigeria based full-stack web developer passionate about building responsive, functional websites that is accessible to users and user friendly</p>
                    <div className='flex gap-2'>
                        <div className='bg-[rgba(211,233,122,1)] rounded-full px-2 py-1 flex gap-1 my-auto'>
                            <a className='text-[12px] md:text-md lg:text-lg font-semibold' href="#my_contact">CONTACT ME</a>
                            <span className='md:hidden my-auto'><img className='w-[18px]' src={arrow} alt="" /></span>
                            <span className='hidden md:block my-auto'><img className='w-[10px] rounded-full bg-black' src={dot} alt="" /></span>
                        </div>
                        <a href="https://www.linkedin.com/in/joseph-aniekan-194662344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className='my-auto bg-[rgba(34,34,34,1)] rounded-full p-1'><img className='w-[18px] lg:w-[24px]' src={linkedIn} alt="" /></a>
                        <a href="https://github.com/ukpongjoseph" target="_blank" rel="noopener noreferrer" className='my-auto bg-[rgba(34,34,34,1)] rounded-full p-1'><img className='w-[18px] lg:w-[24px]' src={github} alt="" /></a>
                    </div>
                </div>
                <div className='md:w-[50%] py-2 md:py-0'>
                    <span><img  className='w-[100%] rounded-md' src={profile} alt="" /></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero