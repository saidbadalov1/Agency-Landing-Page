import { features } from '../../../constants/constants';
import { Button, FeaturesCard, HeaderCard } from '../../index';

const Features = () => {
  return (
    <div className='py-12'>
      <HeaderCard
        title='Features'
        header='Discover the Tools that Drive Success'
        subHeader='Unleash innovation and accelerate growth with our dynamic product.'
      />
      <section className='mt-12'>
        <div className='flex sm:flex-row flex-col text-center border border-solid border-border py-12 bg-white rounded-[16px]'>
          {features.map((card) => (
            <FeaturesCard key={card.id} card={card}></FeaturesCard>
          ))}
        </div>
      </section>

      <section className='mt-8'>
        <div className='flex gap-3 justify-center'>
          <Button title='Contact Us' />
          <Button color='black' variant='transparent' title='View All' />
        </div>
      </section>
    </div>
  );
};

export default Features;
