import { Link } from 'react-router-dom';
import { Button, Hamburger } from '../../index';
import { navbarTitle } from '../../../constants/constants';
import { useState } from 'react';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className='fixed left-0 right-0 top-4 z-10 text-white'>
      <div className='container mx-auto px-5'>
        <div
          className={`bg-dark px-5 py-3 rounded-[20px] ${
            menu ? 'flex-col gap-[50px]' : 'flex-row'
          } flex justify-between items-center`}
        >
          <Link to='/' className='flex flex-row gap-1'>
            <img src={'/assets/logo/logo.svg'} alt='logo' />
            <span className='font-[500]'>FutureSphere</span>
          </Link>

          <nav
            className={`sm:flex ${menu ? 'flex' : 'hidden'} gap-4 items-center`}
          >
            {navbarTitle.map((nav) => (
              <Link key={nav.id} to={`/${nav.name.toLowerCase()}`}>
                <p className='p2'>{nav.name}</p>
              </Link>
            ))}
          </nav>

          <Button
            variant='purple-normal'
            title='Contact Us'
            classNames={`sm:block ${menu ? 'block' : 'hidden'} `}
          />
          <div className={'sm:hidden block'}>
            <Hamburger onClick={() => setMenu(!menu)} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
