export const PhotoService = {
  getData() {
      return [
          {
              itemImageSrc: 'media/ap-8-osobowy/salon_pyzdra.jpg',
              thumbnailImageSrc: 'media/ap-8-osobowy/salon_pyzdra.jpg',
              alt: 'Zdjęcie przedstawia salon',
              title: 'Salon'
          },
          {
            itemImageSrc: 'media/ap-8-osobowy/pyzdra (1).jpg',
            thumbnailImageSrc: 'media/ap-8-osobowy/pyzdra (1).jpg',
            alt: 'Zdjęcie przedstawia salon',
            title: 'Salon 2'
        },
        {
            itemImageSrc: 'media/ap-8-osobowy/pyzdra (2).jpg',
            thumbnailImageSrc: 'media/ap-8-osobowy/pyzdra (2).jpg',
            alt: 'Zdjęcie przedstawia salon',
            title: 'Salon 3'
             },
          {
            itemImageSrc: 'media/ap-8-osobowy/pyzdra (3).jpg',
            thumbnailImageSrc: 'media/ap-8-osobowy/pyzdra (3).jpg',
            alt: 'Zdjęcie przedstawia kuchnie',
            title: 'Kuchnia'
             },
             {
            itemImageSrc: 'media/ap-8-osobowy/pyzdra (4).jpg',
            thumbnailImageSrc: 'media/ap-8-osobowy/pyzdra (4).jpg',
            alt: 'Zdjęcie przedstawia kuchnie',
            title: 'Kuchnia 2'
             },
             {
            itemImageSrc: 'media/ap-8-osobowy/pyzdra (5).jpg',
            thumbnailImageSrc: 'media/ap-8-osobowy/pyzdra (5).jpg',
            alt: 'Zdjęcie przedstawia sypialnię',
            title: 'Sypialnia 1'
             },
             {
            itemImageSrc: 'media/ap-8-osobowy/pyzdra (6).jpg',
            thumbnailImageSrc: 'media/ap-8-osobowy/pyzdra (6).jpg',
            alt: 'Zdjęcie przedstawia sypialnię',
            title: 'Sypialnia 2'
             },
             {
            itemImageSrc: 'media/ap-8-osobowy/pyzdra (7).jpg',
            thumbnailImageSrc: 'media/ap-8-osobowy/pyzdra (7).jpg',
            alt: 'Zdjęcie przedstawia widok z okna',
            title: 'Widok z okna'
             },
             {
            itemImageSrc: 'media/ap-8-osobowy/pyzdra (8).jpg',
            thumbnailImageSrc: 'media/ap-8-osobowy/pyzdra (8).jpg',
            alt: 'Zdjęcie przedstawia łazienkę',
            title: 'Łazienka'
             },
             {
            itemImageSrc: 'media/ap-8-osobowy/pyzdra (9).jpg',
            thumbnailImageSrc: 'media/ap-8-osobowy/pyzdra (9).jpg',
            alt: 'Zdjęcie przedstawia łazienkę',
            title: 'Łazienka 2'
             },
             {
            itemImageSrc: 'media/ap-8-osobowy/pyzdra (10).jpg',
            thumbnailImageSrc: 'media/ap-8-osobowy/pyzdra (10).jpg',
            alt: 'Zdjęcie przedstawia łazienkę',
            title: 'Łazienka 3'
             },
             {
            itemImageSrc: 'media/ap-8-osobowy/pyzdra (11).jpg',
            thumbnailImageSrc: 'media/ap-8-osobowy/pyzdra (11).jpg',
            alt: 'Zdjęcie przedstawia sypialnie',
            title: 'Sypialnia 3'
             },
             {
            itemImageSrc: 'media/ap-8-osobowy/pyzdra (12).jpg',
            thumbnailImageSrc: 'media/ap-8-osobowy/pyzdra (12).jpg',
            alt: 'Zdjęcie przedstawia sypialnię',
            title: 'Sypialnia 4'
             },
             {
            itemImageSrc: 'media/ap-8-osobowy/pyzdra (13).jpg',
            thumbnailImageSrc: 'media/ap-8-osobowy/pyzdra (13).jpg',
            alt: 'Zdjęcie przedstawia łazienkę',
            title: 'Łazienka 4'
             },
             {
            itemImageSrc: 'media/ap-8-osobowy/pyzdra (14).jpg',
            thumbnailImageSrc: 'media/ap-8-osobowy/pyzdra (14).jpg',
            alt: 'Zdjęcie przedstawia sypialnię',
            title: 'Sypialnia 5'
             },
             {
            itemImageSrc: 'media/ap-8-osobowy/pyzdra (15).jpg',
            thumbnailImageSrc: 'media/ap-8-osobowy/pyzdra (15).jpg',
            alt: 'Zdjęcie przedstawia łazienkę',
            title: 'Łazienka 5'
             },
             {
            itemImageSrc: 'media/ap-8-osobowy/pyzdra (16).jpg',
            thumbnailImageSrc: 'media/ap-8-osobowy/pyzdra (16).jpg',
            alt: 'Zdjęcie przedstawia łazienkę',
            title: 'Łazienka 6'
             },
             {
            itemImageSrc: 'media/ap-8-osobowy/pyzdra (17).jpg',
            thumbnailImageSrc: 'media/ap-8-osobowy/pyzdra (17).jpg',
            alt: 'Zdjęcie przedstawia ogród',
            title: 'Ogród'
             },
             {
            itemImageSrc: 'media/ap-8-osobowy/pyzdra (18).jpg',
            thumbnailImageSrc: 'media/ap-8-osobowy/pyzdra (18).jpg',
            alt: 'Zdjęcie przedstawia taras',
            title: 'Taras'
             },
             {
            itemImageSrc: 'media/ap-8-osobowy/pyzdra (19).jpg',
            thumbnailImageSrc: 'media/ap-8-osobowy/pyzdra (19).jpg',
            alt: 'Zdjęcie przedstawia parking',
            title: 'Parking'
             },
             {
            itemImageSrc: 'media/ap-8-osobowy/pyzdra (20).jpg',
            thumbnailImageSrc: 'media/ap-8-osobowy/pyzdra (20).jpg',
            alt: 'Zdjęcie przedstawia widok na Giewont',
            title: 'Giewont'
             },
             {
            itemImageSrc: 'media/ap-8-osobowy/pyzdra (21).jpg',
            thumbnailImageSrc: 'media/ap-8-osobowy/pyzdra (21).jpg',
            alt: 'Zdjęcie przedstawia plac zabaw',
            title: 'Plac zabaw'
             },             
      ];
  },

  getImages() {
      return Promise.resolve(this.getData());
  }
};