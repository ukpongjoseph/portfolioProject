import React from 'react'
import goalTracker from '../assets/goalTracker.jpeg'
import shortly from '../assets/shortly.png'
import beta from '../assets/beta properties.png'
import arrow from '../assets/arrow.png'
import github from '../assets/bxl-github.svg.png'

const Featured = () => {
  return (
    <div id='my_work' className='border-b-1 border-[rgba(72,72,72,1)] py-7'>
        <div className='w-[90%] md:w-10/12 mx-auto container'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-3xl lg:text-[60px]'>FEATURED PROJECTS</h1>
                <p className='text-[rgba(199,199,199,1)] text-[12px] md:text-md lg:text-lg md:w-[50%]'>Here are some of the selected projects that showcase my passion for full-stack web development</p>
                <div className='py-3 flex flex-col gap-20'>
                    {/* first */}
                    <div className='flex flex-col md:flex-row md:justify-between gap-10'>
                        {/* image */}
                        <div className='rounded-md bg-[rgba(34,34,34,1)] md:w-[48%] flex flex-col h-[400px] gap-4 p-2 justify-center'>
                            <span><img className='mx-auto my-auto h-[320px] w-[95%] md:w-[85%] rounded-md' src={goalTracker} alt="" /></span>
                        </div>
                        {/* text */}
                        <div className='md:w-[48%] flex flex-col gap-2 my-auto'>
                            <h2 className='text-white text-md md:text-lg lg:text-2xl'>A Goal Tracker App</h2>
                            <p className='text-[rgba(199,199,199,1)] text-[12px] md:text-md lg:text-[14px]'>A website that allows users to that allows users to create, update, view and delete goals. Built on the principles of REST API, basic backEnd Logic and technologies like NodeMailer. A fullStack web app that seamlessly connects the backEnd to frontEnd. This project focuses on basic CRUD operations as well as a seamless user experience via  usage of localStorage, useEffect and many more concepts</p>
                            <h2 className='text-white border-b-1 border-[rgba(72,72,72,1)] py-2 text-[12px] md:text-md lg:text-lg'>PROJECT INFO</h2>
                            <div className='flex justify-between text-white text-[12px] md:text-md border-b-1 border-[rgba(72,72,72,1)] py-1'>
                                <p>Year</p>
                                <p>2025</p>
                            </div>
                            <div className='flex justify-between text-white text-[12px] md:text-md border-b-1 border-[rgba(72,72,72,1)] py-1'>
                                <p>Role</p>
                                <p>FullStack developer</p>
                            </div>
                            <div className='text-[rgba(211,233,122,1)] flex gap-4 py-3'>
                                <div className='flex gap-2 border-[rgba(211,233,122,1)] border-b-1 w-[100px] lg:w-[130px] text-[12px] md:text-md lg:text-lg'>
                                    <a href="https://base-front-end-goal-tracker-app.vercel.app/" target="_blank" rel="noopener noreferrer">LIVE DEMO</a>
                                    <span><img className='w-[18px] lg:w-[24px]' src={arrow} alt="" /></span>
                                </div>
                               <div className='flex gap-2 border-[rgba(211,233,122,1)] border-b-1 w-[130px] lg:w-[180px] text-[12px] md:text-md lg:text-lg'>
                                    <a href="https://github.com/ukpongjoseph/frontEnd-goal-tracker-app" target="_blank" rel="noopener noreferrer">SEE ON GITHUB</a>
                                    <span><img className='w-[18px] lg:w-[24px]' src={github} alt="" /></span>
                               </div>
                            </div>
                        </div>
                    </div>
                    {/* second */}
                    <div className='flex flex-col md:flex-row md:justify-between gap-10'>
                        {/* image */}
                        <div className='rounded-md bg-[rgba(34,34,34,1)] md:w-[48%] flex flex-col h-[400px] gap-4 p-2 justify-center'>
                            <div className='flex justify-center w-[25%] lg:w-[20%] bg-black rounded-full px-2 '><p className='text-white text-[13px] lg:text-[15px]'>Challenge</p></div>
                            <span><img className='mx-auto my-auto h-[320px] w-[95%] md:w-[85%] rounded-md' src={shortly} alt="" /></span>
                        </div>
                        {/* text */}
                        <div className='md:w-[48%] flex flex-col gap-2 my-auto'>
                            <h2 className='text-white text-md md:text-lg lg:text-2xl'>Shortly Url Shortener</h2>
                            <p className='text-[rgba(199,199,199,1)] text-[12px] md:text-md lg:text-[14px]'>A Front-End web application for URL shortening that provides users with a simple interface where they can paste long urls and get an instant shortened url throught the TinyURL API. This project focuses on a clean UI, smooth API integration, and delivering a lightweight, fast and reliable user experience</p>
                            <h2 className='text-white border-b-1 border-[rgba(72,72,72,1)] py-2 text-[12px] md:text-md lg:text-lg'>PROJECT INFO</h2>
                            <div className='flex justify-between text-white text-[12px] md:text-md border-b-1 border-[rgba(72,72,72,1)] py-1'>
                                <p>Year</p>
                                <p>2025</p>
                            </div>
                            <div className='flex justify-between text-white text-[12px] md:text-md border-b-1 border-[rgba(72,72,72,1)] py-1'>
                                <p>Role</p>
                                <p>Front-End developer</p>
                            </div>
                            <div className='text-[rgba(211,233,122,1)] flex gap-4 py-3'>
                                <div className='flex gap-2 border-[rgba(211,233,122,1)] border-b-1 w-[100px] lg:w-[130px] md:w-[32%] text-[12px] md:text-md lg:text-lg'>
                                    <a href="https://shortly-eosin.vercel.app/" target="_blank" rel="noopener noreferrer">LIVE DEMO</a>
                                    <span><img className='w-[18px] lg:w-[24px]' src={arrow} alt="" /></span>
                                </div>
                               <div className='flex gap-2 border-[rgba(211,233,122,1)] border-b-1 w-[130px] lg:w-[180px] text-[12px] md:text-md lg:text-lg'>
                                    <a href="https://github.com/ukpongjoseph/Shortly" target="_blank" rel="noopener noreferrer">SEE ON GITHUB</a>
                                    <span><img className='w-[18px] lg:w-[24px]' src={github} alt="" /></span>
                               </div>
                            </div>
                        </div>
                    </div>
                    {/* third */}
                    <div className='flex flex-col md:flex-row md:justify-between gap-10'>
                        {/* image */}
                            <div className='rounded-md bg-[rgba(34,34,34,1)] md:w-[48%] flex flex-col h-[400px] gap-4 p-2 justify-center'>
                                <div className='flex justify-center w-[25%] lg:w-[20%] bg-black rounded-full px-2 '><p className='text-white text-[13px] lg:text-[15px]'>Challenge</p></div>
                                <span><img className='mx-auto my-auto h-[320px] w-[95%] md:w-[85%] rounded-md' src={beta} alt="" /></span>
                            </div>
                        {/* text */}
                        <div className='md:w-[48%] flex flex-col gap-2 my-auto'>
                            <h2 className='text-white text-md md:text-lg lg:text-2xl'>BetaHouse Properties</h2>
                            <p className='text-[rgba(199,199,199,1)] text-[12px] md:text-md lg:text-[14px]'>A property listing/web application that enables users to search, buy or rent properties across multiple locations. The Front-End focuses on seamless user experience and intuitive property search experience with filters such as price, location and property type</p>
                            <h2 className='text-white border-b-1 border-[rgba(72,72,72,1)] py-2 text-[12px] md:text-md lg:text-lg'>PROJECT INFO</h2>
                            <div className='flex justify-between text-white text-[12px] md:text-md border-b-1 border-[rgba(72,72,72,1)] py-1'>
                                <p>Year</p>
                                <p>2025</p>
                            </div>
                            <div className='flex justify-between text-white text-[12px] md:text-md border-b-1 border-[rgba(72,72,72,1)] py-1'>
                                <p>Role</p>
                                <p>FullStack developer</p>
                            </div>
                            <div className='text-[rgba(211,233,122,1)] flex gap-4 py-3'>
                                <div className='flex gap-2 border-[rgba(211,233,122,1)] border-b-1 w-[100px] md:w-[32%] lg:w-[130px] text-[12px] md:text-md lg:text-lg'>
                                    <a href="https://beta-properties-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">LIVE DEMO</a>
                                    <span><img className='w-[18px] lg:w-[24px]' src={arrow} alt="" /></span>
                                </div>
                               <div className='flex gap-2 border-[rgba(211,233,122,1)] border-b-1 w-[130px] lg:w-[180px] text-[12px] md:text-md lg:text-lg'>
                                    <a href="https://github.com/ukpongjoseph/BetaPropertiesFrontend" target="_blank" rel="noopener noreferrer">SEE ON GITHUB</a>
                                    <span><img className='w-[18px] lg:w-[24px]' src={github} alt="" /></span>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured