import React from "react"
import "./Home.css"
import coverhome from "./coverhome.png"
import Product from "./Product"
// process.env.PUBLIC_URL + "/product1.jpg"
function Home() {
  return (
    <div className="home">
     <div className="home-container">
        <img alt="" className="home-image" src={coverhome} />
     </div>
     <div className="home-row">
          <Product
          title="The King Of Drugs by Nora Barrett"
          price = {1499}
          rating = {3}
          image = {process.env.PUBLIC_URL + "/product1.jpg"}
          />
          <Product
          title="Victus by HP Ryzen 5 5600H 16.1-inch(40.9 cm) FHD Gaming Laptop"
          price = {7399}
          rating = {4}
          image = {process.env.PUBLIC_URL + "/product2.jpg"}
          />
     </div>
     <div className="home-row">
     <Product
     title="Echo Dot (4th Gen, 2020 release) with clock "
     price = {4999}
     rating = {5}
     image = {process.env.PUBLIC_URL + "/product3.jpg"}
     />
     <Product
     title="PS5 FIFA 22"
     price = {4499}
     rating = {5}
     image = {process.env.PUBLIC_URL + "/product4.jpg"}
     />
      <Product
      title="Pedigree Adult Dry Dog Food"
      price = {3980}
      rating = {4}
      image = {process.env.PUBLIC_URL + "/product5.jpg"}
      />

     </div>
     <div className="home-row">
     <Product
     title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor"
     price = {165000}
     rating = {4}
     image = {process.env.PUBLIC_URL + "/product6.jpg"}
      />

     </div>



    </div>
  );
}

export default Home;
