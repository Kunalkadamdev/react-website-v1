import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check Out Our Accessories & Lifestyle Products!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="RadaLifestyle Air1 Buds True Wireless in Ear Earbuds with 24H Playtime, Quad Mic ENC, Made in India, Type-C Fast Charging, Environmental Noise Cancellation, 10mm Bass Drivers, TWS Airbass ear buds (White)"
              label="Electronics"
              path="/products"
            />
            <CardItem
              src="images/img-2.jpg"
              text="RadaLifestyle 20000 mAh Lithium_Polymer 22.5W Super Fast Charging Ultra Compact Power Bank with Quick Charge & Power Delivery, Type C Input/Output, Made in India, Type C Cable Included (Camo)"
              label="Electronics"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="RadaLifestyle Genuine Leather Laptop Bag for Men/Office Bag for Men, Brown | Fits Upto 16 Inch Laptop/MacBook | Leather Bag with Shoulder Straps | Laptop Messenger Bag/Leather Bag for Men |"
              label="Lifestyle Product"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="RadaLifestyle Airbass Bluetooth Wireless Over Ear Headphones with Mic Upto 20 Hours Playback, 50MM Drivers, Soft Padded Ear Cushions and Physical Noise Isolation (Red)"
              label="Electronics"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="RadaLifestyle Men's Genuine Leather RFID Protection Wallet | Wallet for Men"
              label="Lifestyle Product"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
