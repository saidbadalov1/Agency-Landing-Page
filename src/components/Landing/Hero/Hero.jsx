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
          className='sm:rounded-[250px] rounded-[16px] mx-auto w-full sm:max-h-[388px] max-h-[250px] object-cover'
          alt='hero'
        />
      </section>

      <section className='mt-12 sm:px-14'>
        <div className='flex sm:flex-row flex-col sm:gap-0 gap-8 text-center border border-solid border-border py-4 bg-white rounded-[16px]'>
          {statistics.map((card) => (
            <StatisticsCard key={card.id} card={card}></StatisticsCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
