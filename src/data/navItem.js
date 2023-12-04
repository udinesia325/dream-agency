import { FaFacebookF } from 'react-icons/fa6'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const navItem = [
  {
    title: 'Home',
    href: '#',
  },
  {
    title: 'Services',
    href: '#services',
  },
  {
    title: 'About Us',
    href: '#about-us',
  },
  {
    title: 'Contact Us',
    href: '#contact-us',
  },
]

export const navSocial = [
  {
    icon: <FaFacebookF className="text-dark" />,
    href: 'https://www.facebook.com/',
  },
  {
    icon: <FaLinkedinIn className="text-dark" />,
    href: 'https://www.linkedin.com/',
  },
  {
    icon: <FaInstagram className="text-dark" />,
    href: 'https://www.instagram.com/',
  },
]
export default navItem
