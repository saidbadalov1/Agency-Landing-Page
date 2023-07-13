import { CardWithImage } from '../../index';

const Services = () => {
  const headerCardProps = {
    title: 'Services',
    position: 'items-start',
    header: 'Streamlined Business Operations',
    subHeader:
      'Our technology solutions streamline and optimize business operations, automating processes, enhancing efficiency, and improving overall productivity. From seamless inventory management to streamlined customer relationship management, our solutions empower businesses to operate at their peak potential, saving time and resources while maximizing profitability.',
  };

  const buttonProps = [{ id: 0, name: 'Contact Us' }];

  return (
    <div className='py-12 '>
      <CardWithImage
        headerCardProps={headerCardProps}
        buttonProps={buttonProps}
        image='/assets/images/services.jpg'
      />
    </div>
  );
};

export default Services;
