import React, {useState} from 'react'
import mobileMenu from '../assets/MobileMenu.png'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleMobile = () => {
        setIsOpen(isOpen?false:true)
    }
  return (
    <div className='text-[rgba(199,199,199,1)] w-[95%] md:w-11/12 mx-auto container'>
        <div className='flex justify-between'>
            <Link to='/'><h1 className='text-lg md:text-xl lg:text-3xl my-auto md:my-0'>JOSEPH ANIEKAN</h1></Link>
            <div className='md:flex gap-6 hidden text-[12px] lg:text-sm'>
                <a href="#my_work">Work</a>
                <a href="#about_me">About</a>
                <a href="#my_contact">Contact</a>
            </div>
            <button onClick={handleMobile} className='md:hidden w-[30px]'><img src={mobileMenu} alt="" /></button>
        </div>
        {
            isOpen && <div className='text-sm flex flex-col gap-1 items-center'>
                <a href="#my_work">Work</a>
                <a href="#about_me">About</a>
                <a href="#my_contact">Contact</a>
            </div>
        }
    </div>
  )
}

export default Nav