'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BiLogoWhatsapp } from 'react-icons/bi';

export default function Header() {
	const items = [
		{ id: '#', name: 'Home' },
		{ id: '#product', name: 'Product' },
		{ id: '#about', name: 'About Us' },
		{ id: '#contact', name: 'Contact' },
	];

	return (
		<div className="flex items-center justify-between py-4">
			<div className="flex items-center gap-4">
				<div className="w-10">
					<Image
						src={'/assets/logo.png'}
						alt=""
						width={500}
						height={500}
						priority
					/>
				</div>
				<div className="hidden lg:block w-28">
					<Image
						src={'/assets/logo-text.png'}
						alt=""
						width={500}
						height={500}
						priority
					/>
				</div>
			</div>

			<div className="hidden lg:flex items-center gap-8">
				{items?.map(item => (
					<Link key={item.id} href={item.id} className="hover:opacity-80">
						{item.name}
					</Link>
				))}
			</div>

			<div className="lg:hidden">
				<Link href={'https://wa.me/6281524263428'} target="_blank">
					<button className="lg:flex btn rounded-2xl">
						<BiLogoWhatsapp color="green" />
						Order Now
					</button>
				</Link>
			</div>
		</div>
	);
}
