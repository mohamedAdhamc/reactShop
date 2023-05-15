import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ id, title, price, imageUrl, description, rating, reviews, discount,cartItemIds, setCartItemIds }) => {

  const addProduct = () => {
    if (!cartItemIds.includes(id)) {
      setCartItemIds([...cartItemIds, id]);
    }
    const toastElement = document.createElement("div");
    toastElement.textContent = "Item added to cart!";
    toastElement.classList.add("text-white", "bg-blue-500", "py-2", "px-4", "rounded", "fixed", "top-0", "left-0", "z-10");
    document.body.appendChild(toastElement);
    setTimeout(() => {
      toastElement.remove();
    }, 2000);
  }

  return (
    <div className="max-w-xs min-w-full  mx-auto bg-white shadow-md rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
      <img className="object-cover object-center h-48 w-full" src={imageUrl} alt={title} />
      <div className="p-4">
        <h2 className="text-gray-900 font-bold text-lg">{title}</h2>
        <p className="text-gray-700 mt-2">${price}</p>
        {discount != 0 && <p className="text-red-500">Discount: {discount} %</p> }
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">
            {rating}
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 1l2.928 6.78 6.768.62-4.928 4.224 1.44 6.944-6-3.648-6 3.648 1.44-6.944L.304 8.4l6.768-.62L10 1z"
              />
            </svg>
          </span>
          <span className="text-gray-600 ml-2">{reviews} reviews</span>
        </div>
        <p className="text-gray-700 mt-2">{description}</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addProduct}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
