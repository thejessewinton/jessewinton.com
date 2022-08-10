import Image from 'next/image';

import 'swiper/css';
import Image01 from '/public/images/Image01.webp';
import Image02 from '/public/images/Image02.webp';
import Image03 from '/public/images/Image03.webp';
import Image04 from '/public/images/Image04.webp';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Gallery = () => {
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
    <div className="my-12 border-t border-gray-300">
      <Swiper spaceBetween={24}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width="400"
              layout="fill"
              placeholder="blur"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
