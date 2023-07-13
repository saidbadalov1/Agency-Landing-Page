import {
  Circle,
  Facebook,
  Innovation,
  Layout,
  Linkedin,
  Twitter,
} from '../icons';

export const navbarTitle = [
  { id: 0, name: 'About' },
  { id: 1, name: 'Careers' },
  { id: 2, name: 'Blogs' },
  { id: 3, name: 'Pricing' },
];

export const statistics = [
  { id: 0, title: 'New users per month', count: '50K' },
  { id: 1, title: 'Active Users', count: '150K' },
  { id: 2, title: 'Satisfied Customers', count: '98%' },
];

export const features = [
  {
    id: 0,
    Icon: Innovation,
    title: 'Cutting-Edge Innovation',
    description:
      "Experience groundbreaking technological advancements that push the boundaries of what's possible, revolutionizing industries and transforming the way we live and work.",
  },
  {
    id: 1,
    Icon: Circle,
    title: 'Seamless Connectivity',
    description:
      'Stay connected anytime, anywhere with our robust and reliable network infrastructure, ensuring uninterrupted communication and effortless access to the digital world.',
  },
  {
    id: 2,
    Icon: Layout,
    title: 'Intuitive User Interface',
    description:
      'Enjoy a seamless and intuitive user experience with our sleek and user-friendly interface, designed to simplify complex tasks and enhance productivity.',
  },
];

export const clientsSlider = [
  {
    id: 0,
    name: 'descript',
    img: '/assets/images/clients/company-1.png',
  },
  {
    id: 1,
    name: 'shopify',
    img: '/assets/images/clients/company-2.png',
  },
  {
    id: 2,
    name: 'slack',
    img: '/assets/images/clients/company-3.png',
  },
  {
    id: 3,
    name: 'elastic',
    img: '/assets/images/clients/company-4.png',
  },
  {
    id: 4,
    name: 'loom',
    img: '/assets/images/clients/company-5.png',
  },
];

export const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScrol: 3,
        infinite: true,
        dots: true,
      },
    },
  ],
  slidesToScroll: 1,
};

export const blogs = [
  {
    id: 0,
    title: 'Healthcare',
    header: 'The Future of AI in Healthcare: Transforming Patient Care',
    subHeader:
      ' Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.',
    image: '/assets/images/blog1.jpeg',
  },
  {
    id: 2,
    title: 'Healthcare',
    header: 'The Future of AI in Healthcare: Transforming Patient Care',
    subHeader:
      ' Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.',
    image: '/assets/images/blog1.jpeg',
  },
  {
    id: 3,
    title: 'Healthcare',
    header: 'The Future of AI in Healthcare: Transforming Patient Care',
    subHeader:
      ' Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.',
    image: '/assets/images/blog1.jpeg',
  },
];

export const socialMedia = [
  {
    id: 0,
    name: 'twitter',
    url: 'https://www.linkedin.com/in/said-badalov-a8b436219/',
    Icon: Twitter,
  },
  {
    id: 1,
    name: 'twitter',
    url: 'https://www.linkedin.com/in/said-badalov-a8b436219/',
    Icon: Linkedin,
  },
  {
    id: 2,
    name: 'twitter',
    url: 'https://www.linkedin.com/in/said-badalov-a8b436219/',
    Icon: Facebook,
  },
];
