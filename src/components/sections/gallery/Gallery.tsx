import { useRef } from 'react';

import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import { type SwiperOptions, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Gallery = ({ images }: any) => {
  const galleryOptions: SwiperOptions = {
    spaceBetween: 24,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <div className="border-t border-gray-300 py-12">
      <Swiper modules={[Navigation]} {...galleryOptions}>
        {images.map((image: any, index: number) => (
          <SwiperSlide key={index}>
            <Image
              src={image.image.url}
              alt={image.alt}
              width={image.image.dimensions.width}
              height={image.image.dimensions.height}
              placeholder="blur"
              blurDataURL={`${image.image.url}&blur=100`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
