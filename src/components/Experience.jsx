import React from 'react'

const Experience = () => {
  return (
    <div className='border-b-1 border-[rgba(72,72,72,1)] py-8'>
        <div className='w-[90%] md:w-10/12 mx-auto container flex flex-col gap-5 md:flex-row md:justify-between'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl md:w-[50%]'>MY EXPERIENCE</h1>
            {/* details */}
            <div className='flex flex-col gap-8 text-[rgba(199,199,199,1)] md:w-[50%]'>
                {/* first */}
                <div className='flex flex-col gap-2 lg:gap-3'>
                    {/* title and date */}
                    <div className='flex flex-col md:flex-row md:justify-between'>
                        <p className='text-white'>FullStack developer</p>
                        <p className='text-[12px] md:text-md lg:text-[14px]'>Mar 2025 - Present</p>
                    </div>
                    {/* description */}
                    <p className='text-[12px] md:text-md lg:text-[14px]'>My experience as a fullStack stack developer has given me hands-on exposure to building and deploying full-stack applications, working with React for dynamic frontends, Node.js and Express for backend APIs, MongoDB for database management, and integrating authentication, authorization, and file uploads into built projects. I have also gained practical experience with Git/GitHub for collaboration and deployment on platforms like Vercel, Netlify, and Render, which has strengthened my ability to turn ideas into functional, user-friendly solutions.</p>
                </div>
                {/* second */}
                <div className='flex flex-col gap-2 lg:gap-3'>
                    {/* title and date */}
                    <div className='flex flex-col md:flex-row md:justify-between'>
                        <div className='flex flex-col gap-1'>
                            <p className='text-white'>Full Stack dev Intern</p>
                        </div>
                        <p className='text-[12px] md:text-md lg:text-[14px]'>Aug 2025 - Present</p>
                    </div>
                    {/* description */}
                    <div className='flex flex-col gap-3'>
                        <p className='text-[rgba(211,233,122,1)] text-[12px] md:text-md lg:text-[14px]'>Tech Studio Acacdemy</p>
                        <p className='text-[12px] md:text-md lg:text-[14px]'>I have gained practical, real-world experience working on client-focused projects where I built and maintaining full-stack applications using the MERN stack. The period of my internship has helped me quickly adapt, improve my coding and debugging skills and also strengthened my technical foundation</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience