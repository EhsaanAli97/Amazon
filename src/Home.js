import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
	return (
		<div className="home">
			<img
				className="home__image"
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB408004052_.jpg"
				alt=""
			/>

			{/* Product */}
			{/* Each product will have an id, title, price, rating, and image */}
			<div className="home__row">
				<Product
					id="1234231234"
					title="Samsung 860 EVO 1 TB SATA 2.5 Inch Internal Solid State Drive (SSD)"
					price={125.21}
					rating={5}
					image="https://images-eu.ssl-images-amazon.com/images/I/41qn949SpcL._AC_SY200_.jpg"
				/>
				<Product
					id="1234231234"
					title="ASUS TUF Gaming X570-Plus ATX Motherboard, AMD Socket AM4, Ryzen 3000"
					price={183.65}
					rating={5}
					image="https://images-eu.ssl-images-amazon.com/images/I/51Vkngua4iL._AC_SY200_.jpg"
				/>
			</div>

			<div className="home__row">
				<Product
					id="1234231234"
					title="Corsair iCUE H100i PRO XT RGB Liquid CPU Cooler"
					price={106.92}
					rating={5}
					image="https://images-eu.ssl-images-amazon.com/images/I/41GIu4v3SwL._AC_SY200_.jpg"
				/>
				<Product
					id="1234231234"
					title="Corsair RM750, RM Series, 80 Plus Gold Certified, 750 W Fully Modular ATX Power Supply - Black"
					price={109.99}
					rating={5}
					image="https://images-eu.ssl-images-amazon.com/images/I/51oLdKf876L._AC_SY200_.jpg"
				/>
				<Product
					id="1234231234"
					title="AMD Ryzen 5 3600 Processor (6C/12T, 35 MB Cache, 4.2 GHz Max Boost)"
					price={171.99}
					rating={5}
					image="https://images-eu.ssl-images-amazon.com/images/I/41m+krxXiBL._AC_SY200_.jpg"
				/>
			</div>

			<div className="home__row">
				<Product
					id="1234231234"
					title="Samsung LC49HG90DMUXEN 49 Curved Ultra Wide LED Monitor - 3840 x 1080, 144Hz, 1ms, Quantum Dot, Freesync, 2 x HDMI, Displayport, USB"
					price={814.96}
					rating={5}
					image="https://images-eu.ssl-images-amazon.com/images/I/419e8BJn7uL._AC_SY200_.jpg"
				/>
			</div>
		</div>
	);
}

export default Home;
