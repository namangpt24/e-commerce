import React from "react";
import "./Home.css";
import Card from "./Card";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
       <a href="https://www.primevideo.com/" target="_blank"><img
          className="homeimg"
          src="https://technewsinc.com/wp-content/uploads/2021/07/1625589270_Amazon-Prime-Video-Advertising-in-Movies-and-Series.jpg"
        ></img></a> 
        

        <div className="row">
          <Card
            id='1'
            title="New Apple iPhone 12 Pro (128GB) - Pacific Blue"
            price={95900.00}
            image="https://m.media-amazon.com/images/I/71DVgBTdyLL._SL1500_.jpg"
            rating={5}
          ></Card>
          <Card
          id='2'
          title="Samsung Galaxy M32 5G (Slate Black, 6GB RAM, 128GB Storage)"
          price={16999.00}
          image="https://m.media-amazon.com/images/I/71QT7dSK4BL._SL1500_.jpg"
          rating={4}
          ></Card>
          <Card
          id='3'
          title="OPPO A74 5G (Fluid Black,6GB RAM,128GB Storage) - 5G Android Smartphone | 5000 mAh Battery "
          price={15990.00}
          image="https://m.media-amazon.com/images/I/71ZVxv7Cf9S._SL1500_.jpg"
          rating={4}></Card>
          <Card
          id='4'
          title="Tecno Spark 7T(Jewel Blue, 4GB RAM, 64GB Storage) 6000 mAh Battery| 48 MP AI Dual Rear Camera"
          price={8499.00}
          image="https://m.media-amazon.com/images/I/81aWyRY67SS._SL1500_.jpg"
          rating={3}></Card>
        </div>
        <div className="row">
          <Card
          id='5'
          title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
          price={2149.00}
          image="https://m.media-amazon.com/images/I/61WUqJd4dfS._SL1000_.jpg"
          rating={5}></Card>
          <Card
          id='6'
          title="Fire TV Stick (3rd Gen, 2021) with all-new Alexa Voice Remote (includes TV and app controls) | HD streaming device"
          price={2399.00}
          image="https://m.media-amazon.com/images/I/51-1DEGYWjS._SL1000_.jpg"
          rating={4}></Card>
          <Card
          id='7'
          title="Philips S1121/45 Cordless Electric Shaver, 3D Pivot & Flex Heads, 27 Comfort Cut Blades, Up to 40 Min of Shaving"
          price={1699.00}
          image="https://m.media-amazon.com/images/I/61H50mxzY7L._SL1500_.jpg"
          rating={4}></Card>
          <Card
          id='8'
          title="OnePlus Bullets Wireless Z Bass Edition (Bass Blue)"
          price={1799.00}
          image="https://m.media-amazon.com/images/I/61FIXrKNH5L._SL1500_.jpg"
          rating={3}></Card>
          <Card
          id='9'
          title="HUESLAND by Ahmedabad Cotton 144 TC Cotton Double Bedsheet with 2 Pillow Covers - Yellow, Grey"
          price={624.00}
          image="https://m.media-amazon.com/images/I/71z-ghsEFSL._SL1254_.jpg"
          rating={3}></Card>
          
        </div>
        <div className="row">
          <Card
          id='10'
          title="AmazonBasics 127cm (50 inch) 4K Ultra HD Smart LED Fire TV AB50U20PS (Black)"
          price={38999.00}
          image="https://m.media-amazon.com/images/I/71AqQyCMmeL._SL1240_.jpg"
          rating={4}></Card>
          <Card
          id='11'
          title="Sony Bravia 189 cm (75 inches) 4K Ultra HD Smart LED Google TV KD-75X80J (Black) (2021 Model) | with Alexa Compatibility"
          price={175990.00}
          image="https://m.media-amazon.com/images/I/81P7iSxFzzS._SL1500_.jpg"
          rating={4}></Card>
          {/* <Card
          id='13'
          title=""
          price=""
          image=""
          rating={}></Card> */}
        </div>
      </div>
    

    </div>
  );
}

export default Home;
