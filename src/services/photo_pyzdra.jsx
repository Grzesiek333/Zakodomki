export const PhotoService = {
  getData() {
      return [
          {
              itemImageSrc: 'public/media/ap-8-osobowy/salon_pyzdra.jpg',
              thumbnailImageSrc: 'public/media/ap-8-osobowy/salon_pyzdra.jpg',
              alt: 'Zdjęcie przedstawia salon',
              title: 'Salon'
          },
          {
              itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',
              thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',
              alt: 'Description for Image 2',
              title: 'Title 2'
          },
          {
              itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg',
              thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg',
              alt: 'Description for Image 3',
              title: 'Title 3'
          },
          {
              itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria4.jpg',
              thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria4.jpg',
              alt: 'Description for Image 4',
              title: 'Title 4'
          },
          {
              itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria5.jpg',
              thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria5.jpg',
              alt: 'Description for Image 5',
              title: 'Title 5'
          },
          {
              itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria6.jpg',
              thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria6.jpg',
              alt: 'Description for Image 6',
              title: 'Title 6'
          },
          {
              itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg',
              thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg',
              alt: 'Description for Image 7',
              title: 'Title 7'
          },
          {
              itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria8.jpg',
              thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria8.jpg',
              alt: 'Description for Image 8',
              title: 'Title 8'
          },
          {
              itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria9.jpg',
              thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria9.jpg',
              alt: 'Description for Image 9',
              title: 'Title 9'
          },
          {
              itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria10.jpg',
              thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria10.jpg',
              alt: 'Description for Image 10',
              title: 'Title 10'
          },
          {
              itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria11.jpg',
              thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria11.jpg',
              alt: 'Description for Image 11',
              title: 'Title 11'
          },
          {
              itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria12.jpg',
              thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria12.jpg',
              alt: 'Description for Image 12',
              title: 'Title 12'
          },
          {
              itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria13.jpg',
              thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria13.jpg',
              alt: 'Description for Image 13',
              title: 'Title 13'
          },
          {
              itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria14.jpg',
              thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria14.jpg',
              alt: 'Description for Image 14',
              title: 'Title 14'
          },
          {
              itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria15.jpg',
              thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria15.jpg',
              alt: 'Description for Image 15',
              title: 'Title 15'
          }
      ];
  },

  getImages() {
      return Promise.resolve(this.getData());
  }
};