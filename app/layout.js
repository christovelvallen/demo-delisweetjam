import './globals.css';

export const metadata = {
	title: 'Delisweet Jam',
	description: 'Delisweet Jam Selai Gula Aren',
	icons: {
		icon: '/favicon.ico',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" data-theme="wireframe" className="scroll-smooth">
			<body>{children}</body>
		</html>
	);
}
