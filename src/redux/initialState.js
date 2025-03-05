const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      isFavorite: false,
      isCompared: false,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      oldPrice: 65,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompared: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      isFavorite: false,
      isCompared: true,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      oldPrice: 55,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompared: true,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      isFavorite: false,
      isCompared: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      oldPrice: 50,
      price: 25,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompared: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      oldPrice: 45,
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompared: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      oldPrice: 55,
      price: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompared: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      oldPrice: 50,
      price: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompared: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      oldPrice: 65,
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompared: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      oldPrice: 55,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompared: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      oldPrice: 55,
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompared: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      oldPrice: 75,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompared: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      oldPrice: 55,
      price: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompared: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      oldPrice: 55,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompared: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 40,
      stars: 2,
      promo: null,
      newFurniture: true,
      isFavorite: false,
      isCompared: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      oldPrice: 45,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompared: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      isFavorite: false,
      isCompared: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      isFavorite: false,
      isCompared: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      oldPrice: 45,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompared: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      oldPrice: 35,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompared: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      oldPrice: 60,
      price: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompared: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      isFavorite: false,
      isCompared: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      oldPrice: 50,
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompared: false,
    },
  ],
  cart: {
    products: [],
  },
  feedback: [
    {
      id: 'feedback-1',
      text:
        'Chwalebar nodeipsung elit, sed diam voluptu tempor incididunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.',
      author: 'John Smith',
      position: 'Furniture client',
      image: 'images/clients/john_smith.png',
    },
  ],
};

export default initialState;
