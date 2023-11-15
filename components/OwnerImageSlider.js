'use client';

import { Swiper } from 'swiper/react';

import 'swiper/css';

import { Autoplay } from 'swiper/modules';

export default function OwnerImageSlider({ children }) {
	return (
		<>
			<Swiper
				spaceBetween={30}
				loop={true}
				centeredSlides={true}
				slidesPerView={'auto'}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
				style={{
					width: '100%',
					height: '100%',
				}}
			>
				{children}
			</Swiper>
		</>
	);
}
