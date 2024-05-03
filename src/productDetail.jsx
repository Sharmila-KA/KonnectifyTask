import React from 'react';
import './productDetail.css';
import Colors from './components/Colors'
import DetailsThumb from './components/DetailsThumb';
import "./Header.css";
import Header from "./Header";
class App extends React.Component{

  state = {
    products: [
      {
        "_id": "1",
        "title": "iPhone 9",
        "src": [
          "https://cdn.dummyjson.com/product-images/1/1.jpg",
          "https://cdn.dummyjson.com/product-images/1/2.jpg",
          "https://cdn.dummyjson.com/product-images/1/3.jpg",
          "https://cdn.dummyjson.com/product-images/1/4.jpg",
          "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
        
          ],
        "description": "An apple mobile which is nothing like apple",
        "content":"smartphones",
        "price": 549,
        "discount":12.96,
        "colors":["red","black","crimson","teal"],
        "count": 10
      }
    ],
    index: 0
  };
  

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    return(
      <div>
      <Header />
      <div className="app">
        {
          
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="rowise">
                  <h2>{item.title}</h2>
                  <span>Rs.{item.price}</span>
                </div>
                <Colors colors={item.colors} />
                <p><b>Discount </b>{item.discount}%</p>
                <p>{item.description}</p>
                <p>{item.content}</p>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                <button className="cart"  style={{ backgroundColor: '#cd9042', color:'black', borderRadius:'100px' }}>Add to cart</button>

              </div>
            </div>
          ))
        }
      </div>
      </div>
    );
  };
}

export default App;