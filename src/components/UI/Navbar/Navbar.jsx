import { Link } from 'react-router-dom';
import { Button } from '../../index';
import { navbarTitle } from '../../../constants/constants';

const Navbar = () => {
  return (
    <header className='fixed left-0 right-0 top-4 z-10 text-white'>
      <div className='container mx-auto px-5'>
        <div className='bg-dark px-5 py-3 rounded-[20px] flex justify-between items-center'>
          <Link to='/' className='flex flex-row gap-1'>
            <img src={'/assets/logo/logo.svg'} alt='logo' />
            <span className='font-[500]'>FutureSphere</span>
          </Link>

          <nav className='flex gap-4 items-center'>
            {navbarTitle.map((nav) => (
              <Link key={nav.id} to={`/${nav.name.toLowerCase()}`}>
                <p className='p2'>{nav.name}</p>
              </Link>
            ))}
          </nav>

          <Button variant='purple-normal' title='Contact Us' />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
