import React from 'react'
import './Home.css';
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://m.media-amazon.com/images/I/61iEZLCRknL._SX1500_.jpg" alt="homeimage" />

                <div className="home__row">
                    <Product
                        id="01"
                        title="See u in C by ALi karim sayed"
                        price={4450}
                        image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SY344_BO1,204,203,200_.jpg"

                    />
                    <Product
                        id="02"
                        title="Apple iPhone 11 (64GB) - Purple
                        Size name:64GB
                        Colour:Purple"
                        price={41999}
                        image="https://m.media-amazon.com/images/I/71tpxtLD0aL._SL1500_.jpg"
                    />
                    <Product
                        id="03"
                        title="OnePlus Nord CE 5G (Blue Void, 8GB RAM, 128GB Storage)
                        Size name:8GB RAM/128GB Storage"
                        price={25999}
                        image="https://m.media-amazon.com/images/I/61iy2Ru9KdS._SL1500_.jpg"
                    />
                    <Product
                        id="03"
                        title="boAt Airdopes 141 TWS Earbuds with 42H Playtime, Beast Mode, ENx Tech, ASAP Charge, IWP"
                        price={1299}
                        image="https://m.media-amazon.com/images/I/41enxHWTgIL._SL1500_.jpg"
                    />


                </div>

                <div className="home__row">
                    <Product
                        id="03"
                        title="
                     2020 Apple iPad Air with A14 Bionic chip (10.9-inch/27.69 cm, Wi-Fi, 256GB) - Sky Blue (4th Generation)"
                        price={59999}
                        image="https://m.media-amazon.com/images/I/71X7iKyaS6L._SL1500_.jpg"
                    />
                    <Product
                        id="03"
                        title="
                        Quantum qhm630 2.0 Speakers - Black"
                        price={999}
                        image="https://m.media-amazon.com/images/I/41ltFXg2f8L.jpg"
                    />
                    <Product
                        id="03"
                        title="
                        Redmi Note 10S (Deep Sea Blue, 6GB RAM, 64GB Storage) -Super Amoled Display "
                        price={12999}
                        image="https://m.media-amazon.com/images/I/81B0HJigO-L._SL1500_.jpg"
                    />
                    <Product
                        id="03"
                        title="
                     Fire-Boltt SPO2 Full Touch 1.4 inch Smart Watch 8 Days Battery Life Compatible with Android and iOS IPX7 "
                        price={2500}
                        image="https://m.media-amazon.com/images/I/51RIxsmfcIS._SL1000_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="03"
                        title="
                     Sony Bravia TV LCD WITH the 4k Resolution And High Defination"
                        price={24999}
                        image="https://m.media-amazon.com/images/I/91d84JjR1aS._SL1500_.jpg"
                    />
                    <Product
                        id="03"
                        title="
                        Eureka Forbes Aquaguard Aura UV e-boiling, Ultra Filtration, Active Copper Water Purifier (Black & Copper)"
                        price={11599.00}
                        image="https://m.media-amazon.com/images/I/41XiQ4+6PoL._SL1100_.jpg"
                    />
                    <Product
                        id="03"
                        title="
                     Sony Bravia TV LCD WITH the 4k Resolution And High Defination"
                        price={25000}
                        image="https://m.media-amazon.com/images/I/91d84JjR1aS._SL1500_.jpg"
                    />
                    <Product
                        id="03"
                        title="
                     boAt Rockerz 330 Wireless Neckband with ASAP Charge, Up to 30H Playback,  Metal Control Board, IPX5,"
                        price={1499}
                        image="https://m.media-amazon.com/images/I/51RCJHvtFvS._SL1500_.jpg"
                    />

                </div>
                <div className="home__row">
                   
                    <Product
                        id="03"
                        title="
                     Sony Bravia TV LCD WITH the 4k Resolution And High Defination"
                        price={25000}
                        image="https://m.media-amazon.com/images/I/91d84JjR1aS._SL1500_.jpg"
                    />
                  
                    

                </div>

            </div>

        </div>
    )
}

export default Home
