import React, { useRef, useState, useEffect } from 'react';
import './productDetail.css';
import Colors from './components/Colors';
import DetailsThumb from './components/DetailsThumb';
import Header from "./Header";
import "./Header.css";
import { useParams } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState({});
  const [index, setIndex] = useState(0);
  const { id } = useParams()
  const savedId = id;

  useEffect(() => {
    console.log("productId: " + id);
    fetchProdDetails()
  }, [id])

  const fetchProdDetails = async () => {
    const searchResponse = await fetch(`https://dummyjson.com/products/${savedId}`);
    const searchResult = await searchResponse.json();
    console.log(searchResult)
    setProducts(searchResult);
  }

  const handleThumbClick = (index) => {
    // Update the main image with the thumbnail at the clicked index
    setIndex(index);
  }

  return (
    <div>
      <Header />
      <div className="app">
        <div className="details" key={products?._id}>
          {products?.images ? 
          <div className="big-img">
            {/* Change the src attribute to use the image at the current index */}
            <img src={products?.images[index]} alt="" />
          </div> : <></>
          }
          <div className="box">
            <div className="rowise">
              <h2>{products?.title}</h2>
              <span>Rs.{products?.price}</span>
            </div>
            <p>
              <b>Discount </b>
              {products?.discountPercentage}%
            </p>
            <p>{products?.description}</p>
            <p>{products?.brand}</p>
            {/* Pass the handleThumbClick function to DetailsThumb */}
            {
              products?.images ?
                <DetailsThumb images={products?.images} handleThumbClick={handleThumbClick} /> :
                <></>
            }
            <button className="cart" style={{ backgroundColor: '#cd9042', color: 'black', borderRadius: '100px' }}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
