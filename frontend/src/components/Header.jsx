import logo from '../assets/images/dark.png'
import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <header className='flex place-content-between items-center mb-14'>
      <img className='cursor-pointer w-60' src={logo} alt="logo" />
      <Navbar />
    </header>
  )
}