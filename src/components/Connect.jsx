import React, {useState} from 'react'
import linkeIn from '../assets/bxl-linkedin.svg.png'
import insta from '../assets/bxl-instagram.svg.png'
import twitter from '../assets/twitter.png'
import github from '../assets/bxl-github.svg.png'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

const Connect = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const checkSubmitting = () => {
        setIsSubmitting(isSubmitting?false:true)
    }
    const [formData, setFormData] = useState({
        for_name : "",
        for_email : "",
        subject : "",
        message : ""
    })
    const [errors, setErrors] = useState({
        for_name : "",
        for_email : "",
        subject : "",
        message : ""
    })
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name] : value})
        setErrors({...errors, [name] : ""})
        setIsSubmitting(false)
    }
    const templateParams =   {
    from_name: formData.for_name,
    from_email: formData.for_email,
    subject: formData.subject,
    message: formData.message,
  }
    const handleSubmit = (e) => {
        e.preventDefault()
        let hasError = false
        const newError = {}
        if(!formData.for_name){
            newError.for_name = "Name field cannot be empty"
            hasError = true
        }
        if(!formData.for_email){
            newError.for_email = "Email field cannot be empty"
            hasError = true
        }
        else if(!/\S+@\S+\.\S+/.test(formData.for_email)){
            newError.for_email = "Please provide a valid email address"
            hasError = true
        }
        if(!formData.subject){
            newError.subject = "Subject field cannot be empty"
            hasError = true
        }
        if(formData.subject.length < 6){
            newError.subject = "Minimum length of character for subject field is 6"
            hasError = true
        }
        if(!formData.message){
            newError.message = "Message field cannot be empty"
            hasError = true
        }
        if(formData.message.length < 20){
            newError.message = "Minimum length of character for message field is 20"
            hasError = true
        }
        if(hasError){
            setErrors(newError)
        }else{
            emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((result) => {
                toast.success(`${result.text}, Message sent successfully`)
                setFormData({
                for_name : "",
                for_email : "",
                subject : "",
                message : ""
            })
            setIsSubmitting(false)
            },
            (error) => {
                toast.error(`${error.text}, Something went wrong !!`)
                setIsSubmitting(false)
            });
        }
    }
  return (
    <div id='my_contact' className='md:py-7 py-10'>
        <div className='w-[90%] md:w-10/12 mx-auto container'>
            <div className='flex flex-col md:flex-row gap-10 md:gap-5'>
                {/* connect */}
                <div className='flex flex-col justify-between md:w-[50%]'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl'>LET'S CONNECT</h1>
                        <div className='flex flex-col gap-1'>
                            <p className='text-[rgba(199,199,199,1)] text-[12px] md:text-md lg:text-[14px]'>Say hello at <a className='underline decoration-[rgba(211,233,122,1)]' href="mailto:aniekanjoseph499@gmail.com" target="_blank" rel="noopener noreferrer">aniekanjoseph499@gmail.com</a></p>
                            <p className='text-[rgba(199,199,199,1)] text-[12px] md:text-md lg:text-[14px]'>For more info, here is my <span className='underline decoration-[rgba(211,233,122,1)]'>resume</span></p>
                        </div>
                        <div className='flex gap-2'>
                            <a href="https://www.linkedin.com/in/joseph-aniekan-194662344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><img className='w-[18px] lg:w-[24px]' src={linkeIn} alt="" /></a>
                            <a href="https://github.com/ukpongjoseph" target="_blank" rel="noopener noreferrer"><img className='w-[18px] lg:w-[24px]' src={github} alt="" /></a>
                            <a href="https://x.com/josephukpong9?s=11" target="_blank" rel="noopener noreferrer"><img className='w-[18px] lg:w-[24px]' src={twitter} alt="" /></a>
                            <a href="https://www.instagram.com/joeboy6265?igsh=eGoyY3FxbjZraWQ0" target="_blank" rel="noopener noreferrer"><img className='w-[18px] lg:w-[24px]' src={insta} alt="" /></a>
                        </div>
                    </div>
                    <p className='hidden md:block text-[rgba(199,199,199,1)] md:text-[12px] lg:text-[14px]'>© 2025 Joseph Aniekan</p>
                </div>
                {/* form */}
                <div className='md:w-[50%]'>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-3 text-[rgba(199,199,199,1)] text-[12px] md:text-md lg:text-[14px] w-[100%]'>
                        {/* name */}
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="for_name">Name</label>
                            <input className='rounded-sm px-3 py-1' type="text" id='for_name' name='for_name' value={formData.for_name} onChange={handleChange}/>
                        </div>
                        {errors.for_name && <span className='text-[12px] text-red-600'>{errors.for_name}</span>}
                        {/* email */}
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="for_email">Email</label>
                            <input className='rounded-sm px-3 py-1' type="email" id='for_email' name='for_email' value={formData.for_email} onChange={handleChange}/>
                        </div>
                        {errors.for_email && <span className='text-[12px] text-red-600'>{errors.for_email}</span>}
                        {/* subject */}
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="subject">Subject</label>
                            <input className='rounded-sm px-3 py-1' type="text" id='subject' name='subject' value={formData.subject} onChange={handleChange}/>
                        </div>
                        {errors.subject && <span className='text-[12px] text-red-600'>{errors.subject}</span>}
                        {/* message */}
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="message">Message</label>
                            <textarea className='rounded-sm px-3 py-1 h-[200px]' name="message" id="message" value={formData.message} onChange={handleChange}></textarea>
                        </div>
                        {errors.message && <span className='text-[12px] text-red-600'>{errors.message}</span>}
                        <button onClick={checkSubmitting} className='px-3 py-2 rounded-full bg-[rgba(211,233,122,1)] text-black font-semibold w-[130px] my-3'>{!isSubmitting?"SUBMIT":"SUBMITTING..."}</button>
                    </form>
                    <p className='md:hidden text-[rgba(199,199,199,1)] text-[12px] py-4'>© 2025 Joseph Aniekan</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Connect