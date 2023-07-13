import { Button, StatisticsCard } from '../../index';
import { statistics } from '../../../constants/constants';

const Hero = () => {
  return (
    <div className='pt-[138px] pb-[50px]'>
      <section className='flex gap-4 flex-col text-center'>
        <h1 className=' text-dark'>
          Revolutionizing the Future with Cutting-Edge Technology
        </h1>
        <p className='p2 text-grey'>
          Empowering Innovation for a Digital Tomorrow
        </p>
        <div className='flex gap-4 mx-auto'>
          <Button title='Signup' variant='dark' />
          <Button title='Contact Us' />
        </div>
      </section>

      <section className='mt-12'>
        <img
          src={'/assets/images/hero-image.jpeg'}
          className='rounded-[250px] mx-auto w-full max-h-[388px] object-cover'
          alt='hero'
        />
      </section>

      <section className='mt-12 px-14 '>
        <div className='flex text-center border border-solid border-border py-4 bg-white rounded-[16px]'>
          {statistics.map((card) => (
            <StatisticsCard key={card.id} card={card}></StatisticsCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
