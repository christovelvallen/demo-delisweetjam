'use client';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Product from '@/components/Product';

const Container = ({ bgColor, textColor, children }) => {
	return (
		<div
			className={`${bgColor ? bgColor : 'bg-white'} ${
				textColor ? textColor : 'text-myColor-dark'
			}`}
		>
			<div className="container mx-auto lg:px-16 px-4 overflow-hidden">
				{children}
			</div>
		</div>
	);
};

export default function App() {
	return (
		<>
			<div className="lg:hidden">
				<div className="fixed bottom-4 left-4 right-4 z-50">
					<Menu />
				</div>
			</div>

			<div>
				<div className="lg:fixed top-0 left-0 right-0 z-50">
					<Container bgColor={'bg-myColor-primary'} textColor={'text-white'}>
						<div>
							<Header />
						</div>
					</Container>
				</div>
			</div>

			<div className="lg:pt-16">
				<Container
					bgColor={'bg-gradient-to-b from-myColor-primary to-myColor-dark'}
					textColor={'text-white'}
				>
					<div>
						<Hero />
					</div>
				</Container>
			</div>

			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#332C25"
					fillOpacity="1"
					d="M0,64L20,64C40,64,80,64,120,69.3C160,75,200,85,240,90.7C280,96,320,96,360,85.3C400,75,440,53,480,58.7C520,64,560,96,600,101.3C640,107,680,85,720,117.3C760,149,800,235,840,229.3C880,224,920,128,960,106.7C1000,85,1040,139,1080,181.3C1120,224,1160,256,1200,250.7C1240,245,1280,203,1320,165.3C1360,128,1400,96,1420,80L1440,64L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
				></path>
			</svg>

			<Container
				bgColor={'bg-gradient-to-b from-white to-gray-100'}
				textColor={'text-myColor-dark'}
			>
				<div>
					<Product />
				</div>
			</Container>

			<Container bgColor={'bg-gray-100'} textColor={'text-myColor-dark'}>
				<div id="about">
					<About />
				</div>
			</Container>

			<Container
				bgColor={'bg-gradient-to-b from-myColor-primary to-myColor-dark'}
				textColor={'text-white'}
			>
				<div id="contact">
					<Contact />
				</div>
			</Container>

			<Container bgColor={'bg-myColor-dark'} textColor={'text-gray-200'}>
				<div className="pt-8 pb-32 lg:pb-8 text-center font-sans">
					<p>Copyright © 2023 Delisweet Jam.</p>
				</div>
			</Container>
		</>
	);
}
