'use client';

import { Swiper } from 'swiper/react';

import 'swiper/css';

import { Autoplay } from 'swiper/modules';

export default function ProductSlider({ children }) {
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
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
