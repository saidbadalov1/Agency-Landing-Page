import Slider from 'react-slick';
import { clientsSlider, sliderSettings } from '../../../constants/constants';
import { HeaderCard } from '../../index';

const Clients = () => {
  return (
    <div className='py-12 '>
      <HeaderCard
        title='Our Clients'
        header='Trusted by Industry Leaders'
        subHeader='Join our roster of satisfied clients and experience the exceptional results and service that have earned us the trust of industry leaders worldwide'
      />
      <div className='mt-12'>
        <Slider className='overflow-hidden' {...sliderSettings}>
          {clientsSlider.map((client) => (
            <div className='py-10 !outline-none' key={client.id}>
              <img src={client.img} alt={client.name} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
