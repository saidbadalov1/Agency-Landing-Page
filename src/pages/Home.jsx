import {
  Blogs,
  Clients,
  Contact,
  Features,
  Hero,
  Mission,
  Services,
} from '../components';

const Home = () => {
  return (
    <div className='container mx-auto px-5'>
      <Hero />
      <Features />
      <Mission />
      <Clients />
      <Services />
      <Blogs />
      <Contact />
    </div>
  );
};

export default Home;
