import Image from 'next/image';

import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';
import Image01 from '/public/images/Image01.webp';
import Image02 from '/public/images/Image02.webp';
import Image03 from '/public/images/Image03.webp';
import Image04 from '/public/images/Image04.webp';

export const Carousel = () => {
  const images = [
    {
      src: Image01,
      alt: 'headshot',
      credit: '',
      year: '2021',
    },
    {
      src: Image02,
      alt: 'headshot',
      credit: '',
      year: '2019',
    },
    {
      src: Image03,
      alt: 'headshot',
      credit: '',
      year: '2019',
    },
    {
      src: Image04,
      alt: 'headshot',
      credit: '',
      year: '2019',
    },
  ];
  return (
    <Splide>
      {images.map((image, index) => (
        <SplideSlide key={index}>
          <Image
            src={image.src}
            alt={image.alt}
            width="400"
            layout="fill"
            placeholder="blur"
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};
