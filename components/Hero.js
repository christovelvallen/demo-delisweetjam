'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BiLogoWhatsapp, BiSolidHeart } from 'react-icons/bi';

export default function Hero() {
	return (
		<div className="py-16 flex flex-col lg:flex-row items-center justify-evenly gap-16">
			<div className="flex-1 lg:flex-none">
				<div className="-mt-8 text-center lg:text-left">
					<div className="text-4xl font-extrabold">
						<p>
							Selamatkan momen{' '}
							<span className="text-myColor-second">manismu</span> <br />
							dengan selai{' '}
							<span className="text-myColor-second">gula aren</span>
						</p>
					</div>

					<p className="mt-4 text-xl">
						Nikmati kelezatan alami, nikmati kehidupan.
					</p>
				</div>

				<div className="flex justify-center lg:justify-start gap-4 mt-8">
					<Link href={'#product'}>
						<button className="btn bg-transparent text-white border-white rounded-2xl">
							<BiSolidHeart color="red" />
							Made In Love
						</button>
					</Link>
					<Link href={'https://wa.me/6281524263428'} target="_blank">
						<button className="hidden lg:flex btn rounded-2xl">
							<BiLogoWhatsapp color="green" />
							Order Now
						</button>
					</Link>
				</div>
			</div>

			<div className="max-w-[300px] select-none">
				<Blob />
			</div>
		</div>
	);
}

const Blob = () => {
	return (
		<div className="w-full scale-150">
			<Image
				src={'/assets/blob.png'}
				alt=""
				width={500}
				height={500}
				priority
			/>
		</div>
	);
};
