'use client';

import Image from 'next/image';
import { BiLogoWhatsapp } from 'react-icons/bi';
import { SwiperSlide } from 'swiper/react';
import ProductSlider from './ProductSlider';
import Link from 'next/link';

export default function Product() {
	return (
		<>
			<div className="py-16">
				<div className="px-4 max-w-[700px] mx-auto md:text-center">
					<div className="text-2xl font-extrabold">
						<p>Makan yang manis-manis tapi tetap sehat?</p>
						<p>Delisweet Jam adalah pilihan yang tepat.</p>
					</div>
					<p className="mt-4">
						Delisweet Jam merupakan produk selai gula aren baru yang akan
						diperkenalkan kepada masyarakat tentang nikmat dan jauh lebih sehat
						di bandingkan selai yang menggunakan pemanis buatan.
					</p>
				</div>

				<div
					id="product"
					className="flex flex-col lg:flex-row items-center lg:justify-center pt-16 lg:pt-32 gap-16"
				>
					<div className="flex-1 flex flex-col items-center gap-8">
						<p className="text-3xl font-extrabold">Made in Love ❤️</p>

						<div className="w-full flex justify-center">
							<ProductList />
						</div>

						<div>
							<Link href={'https://wa.me/6281524263428'} target="_blank">
								<button className="btn bg-green-500 text-white rounded-2xl shadow-xl">
									<BiLogoWhatsapp />
									Order Now
								</button>
							</Link>
						</div>
					</div>

					<div className="max-w-[450px] max-h-[450px]">
						<Slider />
					</div>
				</div>
			</div>
		</>
	);
}

const ProductList = () => {
	const items = [
		{
			id: 1,
			name: 'Delisweet Jam',
			varian: 'Selai Gula Aren',
			size: '100 ml',
			price: 'Rp 15.000',
			src: '/assets/product/1.png',
		},
		{
			id: 2,
			name: 'Delisweet Jam',
			varian: 'Selai Gula Aren',
			size: '50 ml',
			price: 'Rp 8.000',
			src: '/assets/product/2.png',
		},
	];

	return (
		<div className="flex justify-center gap-4">
			{items?.map(item => (
				<div
					key={item.id}
					className="max-w-[200px] bg-white p-4 rounded-2xl shadow-xl"
				>
					<div className="w-full p-2">
						<Image src={item.src} alt="" width={500} height={500} priority />
					</div>
					<div className="pt-2">
						<p className="text-lg font-bold">{item.name}</p>
						<p className="text-sm">{item.varian}</p>
						<p className="text-sm">{item.size}</p>
						<p className="mt-2 font-bold">{item.price}</p>
					</div>
				</div>
			))}
		</div>
	);
};

const Slider = () => {
	const items = [
		{
			id: 1,
			src: '/assets/slider/1.png',
		},
		{
			id: 2,
			src: '/assets/slider/2.png',
		},
		{
			id: 3,
			src: '/assets/slider/3.png',
		},
		{
			id: 4,
			src: '/assets/slider/4.png',
		},
		{
			id: 5,
			src: '/assets/slider/5.png',
		},
		{
			id: 6,
			src: '/assets/slider/6.png',
		},
		{
			id: 7,
			src: '/assets/slider/7.png',
		},
		{
			id: 9,
			src: '/assets/slider/9.png',
		},
	];

	return (
		<div className="w-full h-full bg-[url('/assets/slider/bg.png')] bg-cover bg-no-repeat bg-center md:rounded-3xl scale-110">
			<ProductSlider>
				{items?.map(item => (
					<SwiperSlide
						key={item.id}
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<div className="w-full h-full">
							<Image src={item.src} alt="" width={500} height={500} priority />
						</div>
					</SwiperSlide>
				))}
			</ProductSlider>
		</div>
	);
};
