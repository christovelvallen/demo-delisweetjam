'use client';

import Link from 'next/link';
import {
	BiLogoFacebook,
	BiLogoFacebookCircle,
	BiLogoGmail,
	BiLogoInstagram,
	BiLogoInstagramAlt,
	BiLogoWhatsapp,
	BiLogoWhatsappSquare,
} from 'react-icons/bi';

export default function Contact() {
	return (
		<div className="py-16 lg:py-32 max-w-[500px] mx-auto flex flex-col gap-16">
			<div className="px-4">
				<p className="text-3xl font-extrabold text-center">Kontak Kami</p>
				<div className="mt-8">
					<div className="flex flex-col gap-4">
						<div>
							<p className="text-xl font-bold">alamat:</p>
							<div className="flex gap-2">
								<p>-</p>
								<p>
									desa wongkai, kec. Ratahan timur, kab. Minahasa Tenggara,
									Sulawesi utara, Indonesia.
								</p>
							</div>
						</div>
						<div>
							<p className="text-xl font-bold">email:</p>
							<div className="flex gap-2">
								<p>-</p>
								<p>delisweetjam@gmail.com</p>
							</div>
						</div>
						<div>
							<p className="text-xl font-bold">telp:</p>
							<div className="flex gap-2">
								<p>-</p>
								<p>0815-2426-3428</p>
							</div>
							<div className="flex gap-2">
								<p>-</p>
								<p>0852-5661-0258</p>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-8">
					<p className="font-bold">Ikuti kami di sosial media:</p>
					<div className="mt-4 flex flex-col gap-2">
						<Link
							href={
								'https://www.facebook.com/profile.php?id=61553041137394&mibextid=ViGcVu'
							}
							target="_blank"
							className="flex items-center gap-2 hover:opacity-80"
						>
							<BiLogoFacebookCircle className="text-3xl" />
							<p>Delisweet Jam</p>
						</Link>
						<Link
							href={
								'https://instagram.com/delisweet_jam?igshid=MWtpd2NrOWg2eHZ5MA'
							}
							target="_blank"
							className="flex items-center gap-2 hover:opacity-80"
						>
							<BiLogoInstagramAlt className="text-3xl" />
							<p>@delisweet_jam</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
