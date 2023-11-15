'use client';

export default function Question() {
	const items = [
		{
			id: 1,
			question: 'Apa itu Delisweet Jam?',
			answer:
				'Delisweet Jam merupakan produk selai gula aren baru yang akan diperkenalkan kepada masyarakat tentang nikmat dan jauh lebih  sehat di bandingkan selai yang menggunakan pemanis buatan.',
		},
		{
			id: 2,
			question: 'Delisweet Jam dibuat pakai apa?',
			answer:
				'Di ambil langsung dari pohon aren/enau atau biasa orang manado menyebutnya pohon seho dari nira aren diproduksi menjadi selai tanpa pengawet.',
		},
		{
			id: 3,
			question: 'Apa manfaat mengkonsumsi Delisweet Jam?',
			answer:
				'Gula aren sering dianggap sebagai gula alami yang lebih baik untuk kesehatan karena memiliki indeks glikemik yang lebih rendah dari pada gula pasir. Gula aren dapat membantu peningkatan produksi sel darah merah. Hal ini terjadi berkat vitamin B dalam gula ini meskipun dalam jumhlah kecil. ',
		},
		{
			id: 4,
			question: 'Bagaimana cara memesan Delisweet Jam?',
			answer:
				'Untuk saat ini kami hanya menerima pesanan lewat whatsapp, anda bisa langsung saja menekan button order now pada website dan akan langsung diarahkan untuk proses pemesanan selanjutnya.',
		},
	];

	return (
		<div className="flex flex-col gap-4">
			{items?.map(item => (
				<div
					key={item.id}
					className="collapse collapse-arrow bg-white text-myColor-dark py-2 rounded-2xl shadow-sm hover:opacity-80"
				>
					<input type="radio" name="my-accordion-2" />
					<div className="collapse-title text-xl font-bold">
						{item.question}
					</div>
					<div className="collapse-content">
						<p>{item.answer}</p>
					</div>
				</div>
			))}
		</div>
	);
}
