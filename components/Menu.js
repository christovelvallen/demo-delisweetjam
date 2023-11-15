'use client';

import { BiCollection, BiHelpCircle, BiHomeAlt, BiPhone } from 'react-icons/bi';
import Link from 'next/link';

export default function Menu() {
	const items = [
		{ id: '#', name: 'Home', icon: BiHomeAlt },
		{ id: '#product', name: 'Product', icon: BiCollection },
		{ id: '#about', name: 'About Us', icon: BiHelpCircle },
		{ id: '#contact', name: 'Contact', icon: BiPhone },
	];

	return (
		<div className="bg-myColor-dark text-gray-200 max-w-[400px] h-[70px] mx-auto flex gap-1 p-1 rounded-2xl">
			{items?.map(item => (
				<Link
					key={item.id}
					href={item.id}
					className="flex-1 h-full flex flex-col items-center justify-center"
				>
					<item.icon className="text-3xl" />
					<p className="text-[9px]">{item.name}</p>
				</Link>
			))}
		</div>
	);
}
