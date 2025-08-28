import React from 'react'
import downloagIcon from '../assets/downloadIcon.png'
import dot from '../assets/desktopDot.png'
import github from '../assets/bxl-github.svg.png'
import linkedIn from '../assets/bxl-linkedin.svg.png'

const MainAbout = () => {
  return (
    <div>
        <div className='w-[90%] md:w-10/12 mx-auto container'>         
            <div className='flex flex-col md:flex-row md:justify-between pt-20 pb-10 gap-2'>
                <div className='md:w-[40%]'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl'>ABOUT ME</h1>
                </div>
                <div className='flex flex-col md:w-[60%] gap-2'>
                    <p className='text-white text-[16px] md:text-md lg:text-2xl'>I am a full-stack web developer based in Nigeria. I have a background in Basic Medical Sciences.</p>
                    <p className='text-[12px] md:text-md lg:text-[14px] text-[rgba(199,199,199,1)] py-3'>I am a full-stck web developer based in Nigeria. I have a background in Basic Medical science. I am looking for an opportunity to grow, challenge myself and become better. I am also a goal-getter and i have a "never-give-up" mentality, with this I bring both resilience and determination to every project I work on.</p>
                    <div className='flex gap-2'>
                        <div className='bg-[rgba(211,233,122,1)] rounded-full px-2 py-1 flex gap-1 my-auto'>
                            <a className='text-[12px] md:text-md lg:text-lg font-semibold py-1' href="">DOWNLOAD RESUME</a>
                            <span className='md:hidden my-auto'><img className='w-[28px]' src={downloagIcon} alt="" /></span>
                            <span className='hidden md:block my-auto'><img className='w-[10px] rounded-full bg-black' src={dot} alt="" /></span>
                        </div>
                        <a href="https://www.linkedin.com/in/joseph-aniekan-194662344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className='my-auto bg-[rgba(34,34,34,1)] rounded-full p-1'><img className='w-[18px] lg:w-[24px]' src={linkedIn} alt="" /></a>
                        <a href="https://github.com/ukpongjoseph" target="_blank" rel="noopener noreferrer" className='my-auto bg-[rgba(34,34,34,1)] rounded-full p-1'><img className='w-[18px] lg:w-[24px]' src={github} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainAbout