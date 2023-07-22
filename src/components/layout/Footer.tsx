import Image from 'next/image'
import logo from '/public/Logo.webp'
import { Input } from '../ui/input'
import Link from 'next/link'
import Social from '../Social'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'

function Footer() {
  return (
    <div className='footer flex flex-col md:flex-row px-2 justify-between gap-[2em] max-w-screen-xl m-auto py-4'>
      <div className="foote_logo flex flex-col gap-4  flex-2 max-w-[350px]">
        <Link href="/">
          <Image className='' src={logo} alt='Logo' />
        </Link>
        <p className="leading-7 ">
        Small, artisan label that offers a thoughtfully curated collection of high 
        quality everyday essentials made.
        </p>
        <Social />
      </div>
      <div className="company flex flex-col gap-4 flex-1">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Company
        </h4>
        <div className="footer_links flex flex-col gap-4">
          <Link href="#" className="footer_link">About</Link>
          <Link href="#" className="footer_link">Terms of Use</Link>
          <Link href="#" className="footer_link">Privacy Policy</Link>
          <Link href="#" className="footer_link">How it Works</Link>
          <Link href="#" className="footer_link">Contact Us</Link>
        </div>
      </div>
      <div className="support flex flex-col gap-4 flex-1">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Support
        </h4>
        <div className="footer_links flex flex-col gap-4">
          <Link href="#" className="footer_link">Support Carrer</Link>
          <Link href="#" className="footer_link">24h Service</Link>
          <Link href="#" className="footer_link">Quick Chat</Link>
        </div>
      </div>
      <div className="contact flex flex-col gap-4 flex-[2]">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Contact
        </h4>
        <div className="footer_links flex flex-col gap-4">
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <div className="contact_name flex gap-2">
          <Input type="text" placeholder="First Name" />
          <Input type="text" placeholder="Last Name" />
          </div>
          <Input type="email" placeholder="Your Email" />
          <Textarea className='w-full' placeholder="Type your message here." />
          <Button>Send message</Button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer