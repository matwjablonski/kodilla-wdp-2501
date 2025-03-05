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
      id: 'bd-aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
      isFavorite: false,
      isCompared: false,
      myRating: 4,
    },
    {
      id: 'bd-aenean-ru-bristique-2',
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
      id: 'bd-aenean-ru-bristique-3',
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
      id: 'bd-aenean-ru-bristique-4',
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
      id: 'bd-aenean-ru-bristique-5',
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
      id: 'bd-aenean-ru-bristique-6',
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
      id: 'bd-aenean-ru-bristique-7',
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
      id: 'bd-aenean-ru-bristique-8',
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
      id: 'bd-aenean-ru-bristique-9',
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
      id: 'bd-aenean-ru-bristique-10',
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
      id: 'bd-aenean-ru-bristique-11',
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
      id: 'bd-aenean-ru-bristique-12',
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
      id: 'bd-aenean-ru-bristique-13',
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
      id: 'bd-aenean-ru-bristique-14',
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
      id: 'bd-aenean-ru-bristique-15',
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
      id: 'bd-aenean-ru-bristique-16',
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
      id: 'bd-aenean-ru-bristique-17',
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
      id: 'bd-aenean-ru-bristique-18',
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
      id: 'bd-aenean-ru-bristique-19',
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
      id: 'bd-aenean-ru-bristique-20',
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
      id: 'bd-aenean-ru-bristique-21',
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
      id: 'bd-aenean-ru-bristique-22',
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
      id: 'bd-aenean-ru-bristique-23',
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
      id: 'bd-aenean-ru-bristique-24',
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
    {
      id: 'chr-aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'chair',
      price: 20,
      stars: 4,
      promo: null,
      newFurniture: true,
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
    },
    {
      id: 'chr-aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
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
    },
    {
      id: 'chr-aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
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
    },
    {
      id: 'chr-aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'chair',
      price: 40,
      stars: 2,
      promo: null,
      newFurniture: true,
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
    },
    {
      id: 'chr-aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
    },
    {
      id: 'chr-aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
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
    },
    {
      id: 'tbl-aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'table',
      price: 20,
      stars: 4,
      promo: null,
      newFurniture: true,
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
    },
    {
      id: 'tbl-aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'table',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
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
    },
    {
      id: 'tbl-aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'table',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
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
    },
    {
      id: 'tbl-aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'table',
      price: 40,
      stars: 2,
      promo: null,
      newFurniture: true,
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
    },
    {
      id: 'tbl-aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'table',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
    },
    {
      id: 'tbl-aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'table',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
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
    },
    {
      id: 'sf-aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'sofa',
      price: 20,
      stars: 4,
      promo: null,
      newFurniture: true,
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
    },
    {
      id: 'sf-aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
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
    },
    {
      id: 'sf-aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
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
    },
    {
      id: 'sf-aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'sofa',
      price: 40,
      stars: 2,
      promo: null,
      newFurniture: true,
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
    },
    {
      id: 'sf-aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
    },
    {
      id: 'sf-aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
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
    },
    {
      id: 'din-aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'dining',
      price: 20,
      stars: 4,
      promo: null,
      newFurniture: true,
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
    },
    {
      id: 'din-aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
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
    },
    {
      id: 'din-aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: null,
      newFurniture: true,
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
};

export default initialState;
