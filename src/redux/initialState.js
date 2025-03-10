const initialState = {
  logged: {
    status: false,
    user: [],
  },
  compareFull: false,
  comparedProducts: [],
  favorites: [],
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'bd-aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      isCompared: false,
      myRating: 4,
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-1.jpg',
      oldPrice: 65,
      hotDeals: true,
      hotDealsEndTime: '2025-03-30T23:59:59Z',
      featured: false,
    },
    {
      id: 'bd-aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
      oldPrice: 65,
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-2.jpg',
      hotDeals: false,
      hotDealsEndTime: '',
      featured: true,
    },
    {
      id: 'bd-aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 40,
      stars: 2,
      promo: null,
      newFurniture: true,
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-3.jpg',
      oldPrice: 85,
      hotDeals: true,
      hotDealsEndTime: '2025-04-03T23:59:59Z',
      featured: false,
    },
    {
      id: 'bd-aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
      oldPrice: 55,
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-4.jpg',
      hotDeals: true,
      hotDealsEndTime: '2025-03-20T23:59:59Z',
      featured: false,
    },
    {
      id: 'bd-aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-5.jpg',
      hotDeals: false,
      hotDealsEndTime: '',
      featured: true,
    },
    {
      id: 'bd-aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 25,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
      oldPrice: 50,
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-6.jpg',
      hotDeals: false,
      hotDealsEndTime: '',
      featured: true,
    },
    {
      id: 'bd-aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
      oldPrice: 45,
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-7.jpg',
      hotDeals: false,
      hotDealsEndTime: '',
      featured: true,
    },
    {
      id: 'bd-aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
      oldPrice: 55,
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-8.jpg',
      hotDeals: false,
      hotDealsEndTime: '',
      featured: false,
    },
    {
      id: 'bd-aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
      oldPrice: 50,
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-9.jpg',
      hotDeals: false,
      hotDealsEndTime: '',
      featured: false,
    },
    {
      id: 'bd-aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
      oldPrice: 65,
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-10.jpg',
      hotDeals: false,
      hotDealsEndTime: '',
      featured: false,
    },
    {
      id: 'bd-aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
      oldPrice: 55,
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-11.jpg',
      hotDeals: false,
      hotDealsEndTime: '',
      featured: false,
    },
    {
      id: 'bd-aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
      oldPrice: 55,
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-12.jpg',
      hotDeals: false,
      hotDealsEndTime: '',
      featured: false,
    },
    {
      id: 'bd-aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
      oldPrice: 75,
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-13.jpg',
      hotDeals: false,
      hotDealsEndTime: '',
      featured: false,
    },
    {
      id: 'bd-aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
      oldPrice: 55,
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-14.jpg',
      hotDeals: false,
      hotDealsEndTime: '',
      featured: false,
    },
    {
      id: 'bd-aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
      oldPrice: 55,
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-15.jpg',
      hotDeals: false,
      hotDealsEndTime: '',
      featured: false,
    },
    {
      id: 'bd-aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 40,
      stars: 2,
      promo: null,
      newFurniture: true,
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-16.jpg',
      hotDeals: false,
      hotDealsEndTime: '',
      featured: false,
    },
    {
      id: 'bd-aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
      oldPrice: 45,
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-17.jpg',
      hotDeals: false,
      hotDealsEndTime: '',
      featured: false,
    },
    {
      id: 'bd-aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-18.jpg',
      hotDeals: false,
      hotDealsEndTime: '',
      featured: false,
    },
    {
      id: 'bd-aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-19.jpg',
      hotDeals: false,
      hotDealsEndTime: '',
      featured: false,
    },
    {
      id: 'bd-aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
      oldPrice: 45,
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-20.jpg',
      hotDeals: false,
      hotDealsEndTime: '',
      featured: false,
    },
    {
      id: 'bd-aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
      oldPrice: 35,
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-21.jpg',
      hotDeals: false,
      hotDealsEndTime: '',
      featured: false,
    },
    {
      id: 'bd-aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
      oldPrice: 60,
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-22.jpg',
      hotDeals: false,
      hotDealsEndTime: '',
      featured: false,
    },
    {
      id: 'bd-aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-23.jpg',
      hotDeals: false,
      hotDealsEndTime: '',
      featured: false,
    },
    {
      id: 'bd-aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
      oldPrice: 50,
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-24.jpg',
      hotDeals: false,
      hotDealsEndTime: '',
      featured: false,
    },
    {
      id: 'chr-aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'chair',
      price: 20,
      stars: 4,
      promo: null,
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'chr-aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'chair',
      oldPrice: 35,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'chr-aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'chr-aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'chair',
      oldPrice: 55,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'chr-aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'chr-aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'chair',
      oldPrice: 50,
      price: 25,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'chr-aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'chair',
      oldPrice: 45,
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'chr-aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'chair',
      oldPrice: 55,
      price: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'chr-aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'chair',
      oldPrice: 50,
      price: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'chr-aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'chair',
      oldPrice: 65,
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'chr-aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'chair',
      oldPrice: 55,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'chr-aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'chair',
      oldPrice: 55,
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'chr-aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'chair',
      oldPrice: 75,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'chr-aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'chair',
      oldPrice: 55,
      price: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'chr-aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'chair',
      oldPrice: 55,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'chr-aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'chair',
      price: 40,
      stars: 2,
      promo: null,
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'chr-aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'chair',
      oldPrice: 45,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'chr-aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'chr-aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'chr-aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'chair',
      oldPrice: 45,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'chr-aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'chair',
      oldPrice: 35,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'chr-aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'chair',
      oldPrice: 60,
      price: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'tbl-aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'table',
      price: 20,
      stars: 4,
      promo: null,
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'tbl-aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'table',
      oldPrice: 35,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'tbl-aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'table',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'tbl-aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'table',
      oldPrice: 55,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'tbl-aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'table',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'tbl-aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'table',
      oldPrice: 50,
      price: 25,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'tbl-aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'table',
      oldPrice: 45,
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'tbl-aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'table',
      oldPrice: 55,
      price: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'tbl-aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'table',
      oldPrice: 50,
      price: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'tbl-aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'table',
      oldPrice: 65,
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'tbl-aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'table',
      oldPrice: 55,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'tbl-aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'table',
      oldPrice: 55,
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'tbl-aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'table',
      oldPrice: 75,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'tbl-aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'table',
      oldPrice: 55,
      price: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'tbl-aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'table',
      oldPrice: 55,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'tbl-aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'table',
      price: 40,
      stars: 2,
      promo: null,
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'tbl-aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'table',
      oldPrice: 45,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'tbl-aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'table',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'tbl-aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'table',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'tbl-aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'table',
      oldPrice: 45,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'tbl-aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'table',
      oldPrice: 35,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'sf-aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'sofa',
      price: 20,
      stars: 4,
      promo: null,
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'sf-aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'sofa',
      oldPrice: 35,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'sf-aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'sf-aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'sofa',
      oldPrice: 55,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'sf-aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'sf-aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'sofa',
      oldPrice: 50,
      price: 25,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'sf-aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'sofa',
      oldPrice: 45,
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'sf-aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'sofa',
      oldPrice: 55,
      price: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'sf-aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'sofa',
      oldPrice: 50,
      price: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'sf-aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'sofa',
      oldPrice: 65,
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'sf-aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'sofa',
      oldPrice: 55,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'sf-aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'sofa',
      oldPrice: 55,
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'sf-aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'sofa',
      oldPrice: 75,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'sf-aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'sofa',
      oldPrice: 55,
      price: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'sf-aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'sofa',
      oldPrice: 55,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'sf-aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'sofa',
      price: 40,
      stars: 2,
      promo: null,
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'sf-aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'sofa',
      oldPrice: 45,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'sf-aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'sf-aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'sf-aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'sofa',
      oldPrice: 45,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'din-aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'dining',
      price: 20,
      stars: 4,
      promo: null,
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'din-aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'dining',
      oldPrice: 35,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'din-aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'din-aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'dining',
      oldPrice: 55,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'din-aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'din-aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'dining',
      oldPrice: 50,
      price: 25,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'din-aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'dining',
      oldPrice: 45,
      price: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'din-aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'dining',
      oldPrice: 55,
      price: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
    {
      id: 'din-aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'dining',
      oldPrice: 50,
      price: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isCompared: false,
    },
  ],
  deals: [
    {
      id: 'deal-1',
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-2.jpg',
      descryption: 'Guest room sofa -20%',
    },
    {
      id: 'deal-2',
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-3.jpg',
      descryption: 'Office chari collection',
    },
    {
      id: 'deal-3',
      image: 'images/products/bed/bed-bd-aenean-ru-bristique-23.jpg',
      descryption: 'Special collection',
    },
  ],

  cart: {
    products: [],
  },
  brands: [
    {
      id: 'brand-1',
      image: '/images/brands/brand-1.png',
      name: 'Brand 1',
    },
    {
      id: 'brand-2',
      image: '/images/brands/brand-2.png',
      name: 'Brand 2',
    },
    {
      id: 'brand-3',
      image: '/images/brands/brand-3.png',
      name: 'Brand 3',
    },
    {
      id: 'brand-4',
      image: '/images/brands/brand-4.png',
      name: 'Brand 4',
    },
    {
      id: 'brand-5',
      image: '/images/brands/brand-5.png',
      name: 'Brand 5',
    },
  ],
  feedback: [
    {
      id: 'feedback-1',
      text:
        'Chwalebar nodeipsung elit, sed diam voluptu tempor incididunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.',
      author: 'John Smith',
      position: 'Furniture client',
      image: 'images/clients/john_smith.png',
    },
    {
      id: 'feedback-2',
      text:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.',
      author: 'Jane Doe',
      position: 'Interior Designer',
      image: 'images/clients/jane_doe.png',
    },
    {
      id: 'feedback-3',
      text:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      author: 'Robert Brown',
      position: 'Architect',
      image: 'images/clients/robert_brown.png',
    },
  ],
  device: {
    mode: 'desktop',
    breakpoints: {
      desktop: 1024,
      tablet: 768,
      mobile: 576,
    },
  },
};

export default initialState;
