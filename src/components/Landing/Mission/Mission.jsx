import { CardWithImage } from '../../index';

const Mission = () => {
  const headerCardProps = {
    title: 'Our Mission Statement',
    position: 'items-start',
    header: 'Empowering the world through transformative technology solutions',
    subHeader:
      'We are dedicated to empowering individuals, businesses, and communities by providing innovative and cutting-edge technology solutions that unlock new possibilities and drive positive change. Our mission is to make technology accessible, reliable, and impactful, enabling our customers to thrive in the digital era and shape a better future for all.',
  };

  const buttonProps = [
    { id: 0, name: 'Signup' },
    { id: 1, name: 'Contact Us' },
  ];

  return (
    <div className='py-[50px]'>
      <CardWithImage
        headerCardProps={headerCardProps}
        buttonProps={buttonProps}
        image='/assets/images/mission.png'
      />
    </div>
  );
};

export default Mission;
