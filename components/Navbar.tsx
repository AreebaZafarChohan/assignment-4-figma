import Link from 'next/link'
import React from 'react'
import NavbarLi from './NavbarLi'

const Navigation = () => {
  return (
    <div className='flex justify-center md:justify-end p-8 gap-6 font-inter'>
        <NavbarLi href="/" name="Works"/>
        <NavbarLi href="/" name="Blog"/>
        <NavbarLi href="/" name="Content"/>
    </div>
  )
}

export default Navigation