import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Shawn',
      email: 'shawntg1971@gmail.com',
      password: bcrypt.hashSync('Sxxcassg'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Comfort Star 12KBTU 20 Seer Inverter',
      slug: 'Comfort Star CSA12CD',
      category: 'AC Units',
      image: '/images/comfort-star-split.jpg',
      price: 495.75,
      countInStock: 10,
      brand: 'Comfort Star',
      rating: 4.5,
      numReviews: 10,
      description:
        'Enjoy this white paneled, 20 Seer unit, with LED display, auto-swing, auto-restart, LCD display, remote or wired control options, dehumification function, high efficeincy filter & sleep mode function, cooling area - max 500sqft.',
    },
    {
      // _id: '2',
      name: 'Comfort Star 12KBTU 20 Seer Inverter BP',
      slug: 'Comfort Star CBP12CD',
      category: 'AC Units',
      image: '/images/comfort-star-split.jpg',
      price: 495.0,
      countInStock: 10,
      brand: 'Comfort Star',
      rating: 2.5,
      numReviews: 10,
      description:
        'Enjoy this black paneled, 20 Seer unit, with LED display, auto-swing, auto-restart, LCD display, remote or wired control options, dehumification function, high efficeincy filter & sleep mode function, cooling area - max 500sqft.',
    },
    {
      // _id: '3',
      name: 'Payne Condenser',
      slug: 'Payne AHE60',
      category: 'AC Units',
      image: '/images/payne-condenser.png',
      price: 1495.0,
      countInStock: 10,
      brand: 'Payne',
      rating: 3.5,
      numReviews: 10,
      description:
        'Enjoy this condenser, 20 Seer unit, with LED display, auto-swing, auto-restart, LCD display, remote or wired control options, dehumification function, high efficeincy filter & sleep mode function, cooling area - max 500sqft.',
    },
    {
      // _id: '4',
      name: 'Sani A/C Gallon',
      slug: 'Sani AC Gallon',
      category: 'Cleaning Products',
      image: '/images/saniac.png',
      price: 45.0,
      countInStock: 15,
      brand: 'Chemtron',
      rating: 2.5,
      numReviews: 20,
      description:
        'Sani A/C disinfectant, Virucide, deoderizer, mildewstatic, & cleaner',
    },
    {
      // _id: '5',
      name: 'Super Fin Gallon',
      slug: 'Super Fin Gallon',
      category: 'Cleaning Products',
      image: '/images/superfin.png',
      price: 25.0,
      countInStock: 0,
      brand: 'Chemtron',
      rating: 3.5,
      numReviews: 6,
      description:
        'Sani A/C disinfectant, Virucide, deoderizer, mildewstatic, & cleaner',
    },
  ],
};

export default data;
