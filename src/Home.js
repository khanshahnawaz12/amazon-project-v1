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
                        price={1500}
                        image="https://m.media-amazon.com/images/I/71tpxtLD0aL._SL1500_.jpg"
                    />
                    <Product
                        id="03"
                        title="OnePlus Nord CE 5G (Blue Void, 8GB RAM, 128GB Storage)
                        Size name:8GB RAM/128GB Storage"
                        price={4450}
                        image="https://m.media-amazon.com/images/I/61iy2Ru9KdS._SL1500_.jpg"
                    />

                </div>

                <div className="home__row">
                    <Product 
                     id="03"
                     title="
                     2020 Apple iPad Air with A14 Bionic chip (10.9-inch/27.69 cm, Wi-Fi, 256GB) - Sky Blue (4th Generation)"
                     price={4450}
                     image="https://m.media-amazon.com/images/I/71X7iKyaS6L._SL1500_.jpg"
                     />
                    <Product 
                    />
                </div>

                <div className="home__row">
                    <Product 
                     id="03"
                     title="
                     2020 Apple iPad Air with A14 Bionic chip (10.9-inch/27.69 cm, Wi-Fi, 256GB) - Sky Blue (4th Generation)"
                     price={4450}
                     image="https://m.media-amazon.com/images/I/91d84JjR1aS._SL1500_.jpg"
                     />
                    
                </div>

            </div>

        </div>
    )
}

export default Home
