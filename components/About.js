'use client';

import Image from 'next/image';
import Question from './Question';
import { SwiperSlide } from 'swiper/react';
import OwnerImageSlider from './OwnerImageSlider';

export default function About() {
	return (
		<div className="pt-16 pb-32 lg:pt-32 flex flex-col gap-16">
			<div className="max-w-[600px] mx-auto">
				<p className="text-3xl font-extrabold text-center">Tentang Kami</p>
				<div className="mt-16">
					<Question />
				</div>
			</div>

			<div className="lg:max-w-[700px] w-full mx-auto">
				<p className="text-3xl font-extrabold text-center">
					Struktur Organisasi
				</p>
				<div className="mt-16">
					<Owners />
				</div>
			</div>
		</div>
	);
}

const Owners = () => {
	const items = [
		{
			id: 1,
			name: 'Marselina Epifanya Slaat',
			post: 'Direktur',
			src: '/assets/owner/3.jpeg',
		},
		{
			id: 2,
			name: 'Lady Christilia Jenifer Antou',
			post: 'Wakil Direktur',
			src: '/assets/owner/2.jpeg',
		},
		{
			id: 3,
			name: 'Efendi Derek',
			post: 'Manajer Pemasaran',
			src: '/assets/owner/1.jpeg',
		},
		{
			id: 4,
			name: 'Glorya Winny Angelie Dengah',
			post: 'Manajer Keuangan',
			src: '/assets/owner/4.jpeg',
		},
		{
			id: 5,
			name: 'Ketsia Tindangen',
			post: 'Manajer Produksi',
			src: '/assets/owner/5.jpeg',
		},
	];

	return (
		<OwnerImageSlider>
			{items?.map(item => (
				<SwiperSlide
					key={item.id}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '200px',
					}}
				>
					<div key={item.id}>
						<div className="w-[200px] h-[200px] bg-white rounded-full shadow-xl overflow-hidden">
							<div className="w-full h-full">
								<Image
									src={item.src}
									alt=""
									width={500}
									height={500}
									priority
								/>
							</div>
						</div>
						<div className="mt-4 text-center">
							<p className="font-bold">{item.post}</p>
							<p className="text-sm">{item.name}</p>
						</div>
					</div>
				</SwiperSlide>
			))}
		</OwnerImageSlider>
	);
};
