import React, { useState, useEffect } from 'react';
import 'react-input-range/lib/css/index.css';
import './Filters.css';
import RangeSlider from 'react-range-slider-input';
import MultiRangeSlider from 'multi-range-slider-react';
import Card from './components/Cards';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";


const Sidebar = () => {
  const [priceRange, setPriceRange] = useState({ min: -1, max: 100 });
  const [discountRange, setDiscountRange] = useState({min:-1,max:100});
  const [minPrice, setMinPrice] = useState(-1);
  const [maxPrice, setMaxPrice] = useState(100);
  const [minDiscount, setMinDiscount] = useState(-1);
  const [maxDiscount, setMaxDiscount] = useState(100);
  const [productsData, setProductsData] = useState([]);
  const [filteredProds, setFilteredProds] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null); 
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const categoriesResponse = await fetch('https://dummyjson.com/products/categories');
      const categories = await categoriesResponse.json();
      console.log(categories);

      const productsResponse = await fetch('https://dummyjson.com/products');
      const prods = await productsResponse.json();

      const prices = prods?.products.map(product => product.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);

      const discount = prods?.products.map(product => product.discountPercentage);
      const minDiscount = Math.min(...discount);
      const maxDiscount = Math.max(...discount);
       
      setPriceRange({ min: minPrice, max: maxPrice });
      setDiscountRange({min: minDiscount, max: maxDiscount})
      setProductsData(prods?.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handlePriceFilter();
  }, [minPrice, maxPrice]);
  useEffect(() => {
    handleDiscountFilter();
  }, [minDiscount, maxDiscount]);



  const handleSearch = async (query) => {
    try {
      const searchResponse = await fetch(`https://dummyjson.com/products/search?q=${query}`);
      const searchResult = await searchResponse.json();
      setFilteredProds(searchResult?.products);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  
  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    clearTimeout(searchTimeout);
    const timeout = setTimeout(() => {
      handleSearch(query);
    }, 1000);
    setSearchTimeout(timeout);
  };

  const handlePriceChange = (e) => {
    setMinPrice(e.minValue);
    setMaxPrice(e.maxValue);
  };

  const handleDiscountChange = (e) => {
    setMinDiscount(e.minValue);
    setMaxDiscount(e.maxValue);
  }; 

  const handlePriceFilter = () => {
    const filteredProducts = productsData.filter((prod) => prod.price >= minPrice && prod.price <= maxPrice);
    setFilteredProds(filteredProducts);
  };
  const handleDiscountFilter = () => {
    const filteredProducts = productsData.filter((prod) => prod.discountPercentage >= minDiscount && prod.discountPercentage <= maxDiscount);
    setFilteredProds(filteredProducts);
  };

  return (
    <>
    <div className="header">
	      
        <img
          className="logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo"
        />

      <div className="search">
        <input className="searchInput" onChange={(e) => handleSearchInputChange(e)} type="text" placeholder="Search..." />
        <SearchIcon className="searchIcon" />
      </div>


      <div className="nav">
        
          <div className="option">
            <span className="optionLineOne">Hello Guest</span>
            <span className="optionLineTwo">Sign In</span>
          </div>
        


        
          <div className="option">
            <span className="optionLineOne">Returns</span>
            <span className="optionLineTwo">& Orders</span>
          </div>
        
        


          <div className="option">
            <span className="optionLineOne">Your</span>
            <span className="optionLineTwo">Prime</span>
          </div>


        
          <div className="optionBasket">
            <ShoppingBasketIcon />
            <span className="optionLineTwo basketCount">
              0
            </span>
          </div>
        
      </div>

    </div>
    <div className="container">
  <div className="row">
    <div className="col-3" style={{marginLeft: '-63px'}}>
      <div className="sidebar">
        <ul>
          {priceRange?.min !== -1 && (
            <div className='row'>
              <div className='col-12'>Price Range</div>
              <div className='col-12'>
                <MultiRangeSlider
                  min={priceRange?.min}
                  max={priceRange?.max}
                  canMinMaxValueSame={false}
                  ruler={false}
                  className=''
                  style={{boxShadow:'none', border: 'none'}}
                  onChange={(e) => {handlePriceChange(e)}}
                />
              </div>
            </div>
          )}
        </ul>
        <br/>
      </div>
      <div className="sidebar">
        <ul>
          {discountRange?.min !== -1 && (
            <div className='row'>
              <div className='col-12'>Discount Percentage</div>
              <div className='col-12'>
                <MultiRangeSlider
                  min={discountRange?.min}
                  max={discountRange?.max}
                  canMinMaxValueSame={false}
                  ruler={false}
                  className=''
                  style={{boxShadow:'none', border: 'none'}}
                  onChange={(e) => {handleDiscountChange(e)}}
                />
              </div>
            </div>
          )}
        </ul>
        <br/>
      </div>
    </div>
    <div className="col-9">
      <div className='row'>
        { (minPrice !== -1 && maxPrice !== 100) && (minDiscount !== -1 && maxDiscount !== 100) ? (
          filteredProds.map((prod, index) => (
            <div key={index} className='col-12 col-sm-6 col-md-4 mb-4 h-100'>
              <Card cardData={prod} />
            </div>
          ))
        ) : (
          productsData.map((prod, index) => (
            <div key={index} className='col-12 col-sm-6 col-md-4 mb-4 h-100'>
              <Card cardData={prod} />
            </div>
          ))
        )}
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Sidebar;
