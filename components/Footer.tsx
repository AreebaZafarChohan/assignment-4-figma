import React from 'react'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='w-full h-[243px] pt-20'>
            <div className='w-[280px] flex mx-auto justify-center gap-9'>
                <FaFacebookSquare size={30} className=' text-customBlue' />
                <FaInstagram size={30} className=' text-customBlue' />
                <FaTwitter size={30} className=' text-customBlue' />
                <FaLinkedin size={30} className=' text-customBlue' />
            </div>
            <h4 className='font-heebo text-lg md:text-[22px] text-center font-semibold py-5'>Copyright &copy;2020 All rights reserved </h4>
        </footer>
    )
}

export default Footer