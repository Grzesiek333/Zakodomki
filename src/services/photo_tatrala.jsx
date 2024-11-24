export const PhotoService = {
    getData() {
        return [
          {
              itemImageSrc: 'media/ap-4-osobowy/t1.jpg',
              thumbnailImageSrc: 'media/ap-4-osobowy/t1.jpg',
              alt: 'Zdjęcie przedstawia Apartament Tatrala',
              title: 'Apartament Tatrala'
          },
          {
            itemImageSrc: 'media/ap-4-osobowy/t2.jpg',
            thumbnailImageSrc: 'media/ap-4-osobowy/t2.jpg',
            alt: 'Zdjęcie przedstawia Apartament Tatrala',
            title: 'Apartament Tatrala'
        },       {
              itemImageSrc: 'media/ap-4-osobowy/t3.jpg',
              thumbnailImageSrc: 'media/ap-4-osobowy/t3.jpg',
              alt: 'Zdjęcie przedstawia Apartament Tatrala',
              title: 'Apartament Tatrala'
          },
          {
            itemImageSrc: 'media/ap-4-osobowy/t4.jpg',
            thumbnailImageSrc: 'media/ap-4-osobowy/t4.jpg',
            alt: 'Zdjęcie przedstawia Apartament Tatrala',
            title: 'Apartament Tatrala'
        },
        {
            itemImageSrc: 'media/ap-4-osobowy/t5.jpg',
            thumbnailImageSrc: 'media/ap-4-osobowy/t5.jpg',
            alt: 'Zdjęcie przedstawia Apartament Tatrala',
            title: 'Apartament Tatrala'
        },
        {
            itemImageSrc: 'media/ap-4-osobowy/t6.jpg',
            thumbnailImageSrc: 'media/ap-4-osobowy/t6.jpg',
            alt: 'Zdjęcie przedstawia Apartament Tatrala',
            title: 'Apartament Tatrala'
        },
        {
            itemImageSrc: 'media/ap-4-osobowy/t7.jpg',
            thumbnailImageSrc: 'media/ap-4-osobowy/t7.jpg',
            alt: 'Zdjęcie przedstawia Apartament Tatrala',
            title: 'Apartament Tatrala'
        },
        {
            itemImageSrc: 'media/ap-4-osobowy/t8.jpg',
            thumbnailImageSrc: 'media/ap-4-osobowy/t8.jpg',
            alt: 'Zdjęcie przedstawia Apartament Tatrala',
            title: 'Apartament Tatrala'
        },
        {
            itemImageSrc: 'media/ap-4-osobowy/t9.jpg',
            thumbnailImageSrc: 'media/ap-4-osobowy/t9.jpg',
            alt: 'Zdjęcie przedstawia Apartament Tatrala',
            title: 'Apartament Tatrala'
        },
        {
            itemImageSrc: 'media/ap-4-osobowy/t10.jpg',
            thumbnailImageSrc: 'media/ap-4-osobowy/t10.jpg',
            alt: 'Zdjęcie przedstawia Apartament Tatrala',
            title: 'Apartament Tatrala'
        },
        {
            itemImageSrc: 'media/ap-4-osobowy/t11.jpg',
            thumbnailImageSrc: 'media/ap-4-osobowy/t11.jpg',
            alt: 'Zdjęcie przedstawia Apartament Tatrala',
            title: 'Apartament Tatrala'
        },
        {
            itemImageSrc: 'media/ap-4-osobowy/t12.jpg',
            thumbnailImageSrc: 'media/ap-4-osobowy/t12.jpg',
            alt: 'Zdjęcie przedstawia plan Apartamentu Tatrala',
            title: 'plan apartamentu Tatrala'
        }     
        ];
    },
  
    getImages() {
        return Promise.resolve(this.getData());
    }
  };