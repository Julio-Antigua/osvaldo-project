import { useState } from 'react'

import burgerMenu from '../assets/images/icon-menu.svg'
import closeBtn from '../assets/images/cerrar.png'

export const Navbar = () => {

  const [menuClicked, setMenuClicked] = useState(true)

  const handleClick = () => {
    setMenuClicked(prevState => !prevState)
  }

  return (
    <>
      <ul className={`${menuClicked ? 'hidden' : ''} absolute bg-slate-900 top-0 right-0 w-[256px] p-[24px] h-full text-[18px] sm:flex sm:items-center sm:w-[638px] sm:place-content-around sm:p-5 sm:h-auto sm:relative sm:text-[20px]`}>
        <li className={`${menuClicked ? 'hidden' : ''} cursor-pointer sm:hidden  flex place-content-end`}>
          <img className='w-8 h-8 mb-[87px]' src={closeBtn} onClick={handleClick} alt="" />
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-CustomRed font-freightSansProBold sm:text-4 text-SoftOrange' href="#">Home</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-CustomRed font-freightSansProBold text-SoftOrange' href="#">Drugs</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-CustomRed font-freightSansProBold text-SoftOrange' href="#">Arms</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-CustomRed font-freightSansProBold text-SoftOrange' href="#">Hitmen</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-CustomRed font-freightSansProBold text-SoftOrange' href="#">More</a>
        </li>
      </ul>
      <img className={`${menuClicked ? '' : 'hidden'} w-10 h-4 cursor-pointer sm:hidden`} src={burgerMenu} onClick={handleClick} alt="" />
    </>
  )
}