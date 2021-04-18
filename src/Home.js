import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB424684220_.jpg"
          alt="Prime"
        />
        <div className="home__row">
          <Product
            id="B086WY1JGD"
            title="MAX Boy's Printed Crew Neck T-shirt"
            price={169.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61S8pE-zVlL._UX679_.jpg"
            rating={5}
          />
          <Product
            id="B083JBBWRK"
            title="Max Boy's Regular fit T-Shirt (Pack of 5)"
            price={637.0}
            image="https://images-na.ssl-images-amazon.com/images/I/91sozy3jnnL._UX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="B08HQ733FP"
            title="Fitness Mantra® Yoga Mat for Gym Workout and Yoga Exercise with 6mm Thickness, Anti-Slip Yoga Mat for Men &amp; Women Fitness (Qnty.-1 Pcs.)"
            price={369.0}
            image="https://images-na.ssl-images-amazon.com/images/I/611BnL8FO5L._SX679_.jpg"
            rating={4}
          />
          <Product
            id="B08R92S78L"
            title="Yogarise Multicolour Yoga mat with Superior Cushioning and Sweat Free Texture with Free Carrying Bag and Strap (Made in India)"
            price={489.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71AtKvDpsuL._SX679_.jpg"
            rating={3}
          />
          <Product
            id="B071R2XNQ4"
            title="IRIS Yoga Mat Towel 72 inch x 24 inch Long Non Slip Yoga Mat Towel, Mat Cover for Hot Yoga, Fitness, Exercise, Machine Washable"
            price={999.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61O69G6PVoL._SX679_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="12414705031"
            title="Buy Home and Decor Products Online at Amazon India"
            price={599.0}
            image="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
