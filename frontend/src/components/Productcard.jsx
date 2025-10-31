import React from 'react';

// Star component for rating
function Star({ filled }) {
  return (
    <svg
      height="20"
      width="20"
      fill={filled ? '#ffb400' : '#ddd'}
      stroke="#999"
      strokeWidth="1"
      viewBox="0 0 24 24"
    >
      <path d="M12 .587l3.668 7.571 8.332 1.151-6.064 5.873 1.428 8.314L12 18.896l-7.364 4.6 1.428-8.314-6.064-5.873 8.332-1.151z" />
    </svg>
  );
}

// Star rating display
function StarRating({ rating = 0, maxRating = 5 }) {
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    stars.push(<Star key={i} filled={i <= rating} />);
  }

  return <div style={{ display: 'flex', gap: '2px' }}>{stars}</div>;
}

// ProductCard component
function ProductCard({ name, category, image, price, discount, rating }) {
  return (
    <div className="product-card">
      <img className="product-image" src={image} alt={name} />
      <h2 className="product-name">{name}</h2>
      <p className="product-category">{category}</p>
      <h3 className="product-price">${price}</h3>
      {discount && <p className="product-discount">-{discount}%</p>}
      <div className="product-rating">
        <StarRating rating={rating} />
      </div>
      <div className="buttons-productcard">
        <button className="view-product">View Product</button>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
