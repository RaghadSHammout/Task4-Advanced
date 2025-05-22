//------------------------------------------  Home---------------------------------------------------------

export type HeroDataType = {
  title: string;
  subtitle: string;
  img: string;
};
export const heroData: HeroDataType[] = [
  {
    title: 'Location',
    subtitle: 'Ahmedabad, India',
    img: '/public/images/heroImages/location.png'
  },
  { title: 'Price', subtitle: '$1000 - $10,000', img: '/public/images/heroImages/currency.png' },
  { title: 'Type of Property', subtitle: 'Apartment', img: '/public/images/heroImages/home.png' },
]

//------------------------------------------ Dream home---------------------------------------------------------
export type DreamHome = {
  title: string;
  subtitle: string;
};

export const DreamHomeData: DreamHome[] =
  [{
    title: 'Find Dream Home',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli'

  }]




//------------------------------------------ How it works---------------------------------------------------------

export interface Card {
  id: number;
  title: string;
  description: string;
  icon: string;
  isBlue?: boolean;
}

export const cardsData: Card[] = [
  {
    id: 1,
    title: "Search Apartment",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
    icon: '/public/images/howItWorksImages/work1.png',

  },
  {
    id: 2,
    title: "Select Apartment",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
    icon: '/public/images/howItWorksImages/work2.png',
    isBlue: true
  },
  {
    id: 3,
    title: "Confirm Apartment",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
    icon: '/public/images/howItWorksImages/work3.png',
  }
];

//------------------------------------------ Most trending---------------------------------------------------------
export const trendingProperties = [
  {
    id: 1,
    imageUrl: "/images/Trending/trend1.png",
    price: 300000,
    title: "Luxury Apartment in California",
    address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    id: 2,
    imageUrl: "/images/Trending/trend2.png",
    price: 300000,
    title: "Luxury Apartment in California",
    address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    id: 3,
    imageUrl: "/images/Trending/trend3.png",
    price: 300000,
    title: "Luxury Apartment in California",
    address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    id: 4,
    imageUrl: "/images/Trending/trend4.png",
    price: 300000,
    title: "Luxury Apartment in California",
    address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    id: 5,
    imageUrl: "/images/Trending/trend5.png",
    price: 300000,
    title: "Luxury Apartment in California",
    address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    id: 6,
    imageUrl: "/images/Trending/trend6.png",
    price: 300000,
    title: "Luxury Apartment in California",
    address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  }
];





//------------------------------------------ Filter---------------------------------------------------------

export interface PropertyData {
  id: number;
  type: string;
  image: string;
  featured: boolean;
  has3DTour: boolean;
}
export const propertyTypes = [
  'Residential',
  'Commercial',
  'Agriculture',
  'Industrial'
];

export const properties: PropertyData[] = [
  {
    id: 1,
    type: 'Residential',
    image: '/images/dealsFilterImages/residential1.png',
    featured: true,
    has3DTour: true
  },
  {
    id: 2,
    type: 'Residential',
    image: '/images/dealsFilterImages/residential2.png',
    featured: true,
    has3DTour: true
  },
  {
    id: 3,
    type: 'Residential',
    image: '/images/dealsFilterImages/residential3.png',
    featured: true,
    has3DTour: true
  },

];


//------------------------------------------ Footer---------------------------------------------------------


import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from "react-icons/fa6";


export type FooterLink = {
  title: string;
  links: string[];
};

export type FooterProps = {
  logo: string;
  description: string;
  location: string;
  sections: FooterLink[];
  socialIcons: {
    platform: string;
    icon: React.ElementType;
    url: string;
  }[];
  copyright: string;
  footerLinks: { name: string; url: string }[];
};

export const footerData = {
  logo: '/images/logo.png',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.',
  location: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
  sections: [
    {
      title: 'Service',
      links: ['Payment & Tax', 'Features', 'View Booking', 'Support'],
    },
    {
      title: 'About',
      links: ['About us', 'News', 'Pricing', 'New Property'],
    },
  ],
  socialIcons: [
    { platform: 'Facebook', icon: FaFacebook, url: '#' },
    { platform: 'Twitter', icon: FaTwitter, url: '#' },
    { platform: 'LinkedIn', icon: FaLinkedinIn, url: '#' },
  ],
  copyright: 'Copyright 2024 flora. All Rights Reserved',
  footerLinks: [
    { name: 'Terms & Conditions', url: '#' },
    { name: 'Privacy Policy', url: '#' },
  ],
};