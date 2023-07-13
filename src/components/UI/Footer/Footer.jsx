import { Link } from 'react-router-dom';
import { navbarTitle, socialMedia } from '../../../constants/constants';

const Footer = () => {
  return (
    <footer className='footer__bg-img pt-[70px] pb-[56px]'>
      <div className='container mx-auto px-5 text-white'>
        <div className='flex justify-between items-center border-t border-b py-7 border-solid  border-white border-opacity-50'>
          <Link to='/' className='flex flex-row gap-1'>
            <img src={'/assets/logo/logo.svg'} alt='logo' />
            <span className='font-[500] '>FutureSphere</span>
          </Link>
          <nav className='flex gap-4 items-center'>
            {navbarTitle.map((nav) => (
              <Link key={nav.id} to={`/${nav.name.toLowerCase()}`}>
                <p className='p2'>{nav.name}</p>
              </Link>
            ))}
          </nav>
        </div>
        <div className='mt-8 flex justify-between items-center'>
          <p className='s'>© 2023 FutureSphere. All rights reserved.</p>
          <div className='flex gap-5'>
            {socialMedia.map((social) => (
              <a
                target='_blank'
                key={social.id}
                href={social.url}
                rel='noreferrer'
              >
                <social.Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
