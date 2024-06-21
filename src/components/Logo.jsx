import React from 'react'
import logo from '../assets/logo.png'
import styles from '../style'

const Logo = () => {
  return (
    <div className='flex items-center'>
       <img src={logo} alt="hyper" className='w-[72px] h-[72px] object-contain'/>
       <h1 className={`${styles.heading3}`}>Hyper<span className='text-[#33FFFF]'>Wave</span></h1>
    </div>
  )
}

export default Logo
