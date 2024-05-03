import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() { 
	  return (
	    <div className="header">
	      
	        <img
	          className="logo"
	          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo"
	        />
	      
	

	      <div className="search">
	        <input className="searchInput" type="text" placeholder="Search..." />
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
	  );
	}
	

	export default Header;