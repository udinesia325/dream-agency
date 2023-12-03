import { FaFacebookF } from 'react-icons/fa6'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const navItem = [
  {
    title: 'Home',
    href: '#',
  },
  {
    title: 'About Us',
    href: '#',
  },
  {
    title: 'Services',
    href: '#',
  },
  {
    title: 'Contact Us',
    href: '#',
  },
]

export const navSocial = [
  {
    icon: <FaFacebookF className="text-dark" />,
    href: '#',
  },
  {
    icon: <FaLinkedinIn className="text-dark" />,
    href: '#',
  },
  {
    icon: <FaInstagram className="text-dark" />,
    href: '#',
  },
]
export default navItem
