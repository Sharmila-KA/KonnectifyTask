import React from 'react';

const Card = ({ cardData }) => {
  const navigateToProductDetail = () => {
    window.open(`/productDetail/${cardData.id}`, '_blank');
    localStorage.setItem("cardId",cardData?.id);
    localStorage.setItem("cardDescription",cardData?.description);
    
  };

  return (
    <div className=''> {/* Adjust column sizes for responsiveness */}
      <div className='card h-100' onClick={navigateToProductDetail} style={{ cursor: 'pointer' , marginTop:'10px'}}>
        <img
          className="card-img-top"
          src={cardData?.thumbnail}
          alt={cardData?.title}
          style={{ objectFit: 'cover', height: '100px' }} // Set image height
        />
        <div className="card-body">
          <h5 className="card-title">{cardData?.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Discount: {cardData?.discountPercentage}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Ratings: {cardData?.rating} out of 5</h6>
          <span className="card-text" style={{ height: '100px', overflowY: 'auto' }}>{cardData?.description}</span>
          <div className="buy d-flex justify-content-between align-items-center">
            <div className="price text-success">
              <h5 className="mt-4">Rs. {cardData?.price}</h5>
            </div>
            <p className="btn mt-3" style={{ backgroundColor: '#cd9042' }}>{cardData?.brand}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
