import Image from 'next/image'
import logo from '/public/Logo.webp'
import { Input } from '../ui/input'
import Link from 'next/link'
import Cart from '../icons/Cart'
import Bar from '../icons/Bar'

function Header() {
  return (
    <div className='header max-w-screen-xl m-auto py-4 px-2 flex items-center justify-between'>
      
      <div className="menu_bar md:hidden">
          <Bar />
        </div>
      <div className="logo">
        <Link href="/">
        <Image className='' src={logo} alt='Logo' />
        </Link>
      </div>
      <div className="nav_links hidden md:flex space-x-4 ">
        <Link href="/products" className="nav_link">All Products</Link>
        <Link href="/category/female" className="nav_link">Female</Link>
        <Link href="/category/male" className="nav_link">Male</Link>
        <Link href="/category/kids" className="nav_link">Kids</Link>
      </div>
      <div className="search_box w-[400px] hidden md:flex items-center border-2 rounded-[50px] px-3">
      <svg className='cursor-pointer' stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" id="search" x="0px" y="0px" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
        c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
        M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
        z"></path></g></svg>
        <Input className='border-none focus-visible:ring-0 bg-transparent focus-visible:ring-offset-0' type="search" id="search" placeholder="Search" />
      </div>
      <div className="cart flex items-center gap-4">
        <div className='relative h-10 w-10 cursor-pointer rounded-full bg-gray-100 flex items-center justify-center'>
          <Cart />
          <span className='absolute top-0 right-0 w-[18px] h-[18px] bg-red-500 text-white leading-[1.3] text-center rounded-full'>0</span>
        </div>
      </div>
    </div>
  )
}

export default Header