import React from 'react'
// import profile from '../assets/WhatsApp Image 2025-08-26 at 03.31.30.jpeg'
// import profile1 from '../assets/WhatsApp Image 2025-08-28 at 02.12.56.jpeg'
// import profile2 from '../assets/WhatsApp Image 2025-08-28 at 02.13.13.jpeg'
// import profile4 from '../assets/profile4.jpeg'
import profile3 from '../assets/profile3.jpeg'

const Capabilities = () => {
  return (
    <div className='border-b-1 border-[rgba(72,72,72,1)] py-8'>
        <div className='w-[90%] md:w-10/12 mx-auto container flex flex-col gap-20'>
        {/* image */}
            <div className='w-[100%]'>
                <span><img className='w-[100%] rounded-md' src={profile3} alt="" /></span>
            </div>
        {/* capability */}
        <div className='flex flex-col md:flex-row md:justify-between'>
            <h1 className='md:w-[50%] text-4xl md:text-5xl lg:text-6xl'>MY CAPABILITIES</h1>
            <div className='md:w-[50%]'>
                <p className='text-[rgba(199,199,199,1)] text-[12px] md:text-md lg:text-[14px] py-3 md:py-0 md:pb-3'>I am a junior MERN stack developer capable of building full-stack web applications using MongoDB, Express, React, and Node.js, creating REST APIs, handling authentication with JWT and bcrypt, managing databases with Mongoose, and implementing CRUD operations, user authentication/authorization, and file uploads with Cloudinary. I am also comfortable with frontend development in React including components, hooks, React Router, and state management. I am equally capable of using Git/GitHub for version control as well as deployment platforms like Vercel, Netlify, or Render, and though still growing, I can understand project requirements, write clean code, debug issues, and deliver working features.</p>
                <div className='flex flex-wrap gap-2 text-[12px] md:text-md lg:text-[14px]'>
                    <p className='text-[rgba(199,199,199,1)] border-[rgba(72,72,72,1)] border-1 rounded-full py-1 px-2'>HTML</p>
                    <p className='text-[rgba(199,199,199,1)] border-[rgba(72,72,72,1)] border-1 rounded-full py-1 px-2'>CSS</p>
                    <p className='text-[rgba(199,199,199,1)] border-[rgba(72,72,72,1)] border-1 rounded-full py-1 px-2'>JAVASCRIPT</p>
                    <p className='text-[rgba(199,199,199,1)] border-[rgba(72,72,72,1)] border-1 rounded-full py-1 px-2'>TAILWIND</p>
                    <p className='text-[rgba(199,199,199,1)] border-[rgba(72,72,72,1)] border-1 rounded-full py-1 px-2'>REACT JS</p>
                    <p className='text-[rgba(199,199,199,1)] border-[rgba(72,72,72,1)] border-1 rounded-full py-1 px-2'>MONGO DB</p>
                    <p className='text-[rgba(199,199,199,1)] border-[rgba(72,72,72,1)] border-1 rounded-full py-1 px-2'>NODE JS</p>
                    <p className='text-[rgba(199,199,199,1)] border-[rgba(72,72,72,1)] border-1 rounded-full py-1 px-2'>EXPRESS JS</p>
                    <p className='text-[rgba(199,199,199,1)] border-[rgba(72,72,72,1)] border-1 rounded-full py-1 px-2'>PYTHON</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Capabilities