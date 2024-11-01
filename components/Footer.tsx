import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='my-20'>
            <div className="relative w-[1440px] h-[234px] top-[2239px]">
          <Image 
          src="./images/fb.svg"
          alt="Facebook Logo"
          width={30}
          height={30}
          className='absolute left-[578px]'
          />
          <Image 
          src="./images/insta.svg"
          alt="Instagram Logo"
          width={30}
          height={30}
          className='absolute left-[659px]'
          />
          <Image 
          src="./images/twitter.svg"
          alt="Twitter Logo"
          width={30}
          height={30}
          className='absolute left-[740px]'
          />
          <Image 
          src="./images/Linkedin.svg"
          alt="LinkedIn Logo"
          width={30}
          height={30}
          className='absolute left-[827px]'
          />
        <p className="absolutefont-heebo font-[500] text-[22px] leading-[32.31px] text-center pt-16 text-black">
        Copyright &copy;2020 All rights reserved 
        </p>
      </div>
        </footer>
    )
}

export default Footer