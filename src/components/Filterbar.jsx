import React, { useState } from 'react';

const FilterBar = ({ onFilter }) => {
  const [rating, setRating] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [discount, setDiscount] = useState('all');

  return (
    <div className="bg-gray-100 py-4 px-6 shadow-md mb-5">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <label htmlFor="ratingFilter" className="text-gray-800 font-medium">
              Rating:
            </label>
            <select
              id="ratingFilter"
              className="border border-gray-300 rounded p-1"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="all">All</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars &amp; Up</option>
              <option value="3">3 Stars &amp; Up</option>
              <option value="2">2 Stars &amp; Up</option>
              <option value="1">1 Star &amp; Up</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label htmlFor="priceFilter" className="text-gray-800 font-medium">
              Price Range:
            </label>
            <select
              id="priceFilter"
              className="border border-gray-300 rounded p-1"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="all">All</option>
              <option value="50">Less than $50</option>
              <option value="100">Less than $100</option>
              <option value="200">Less than $200</option>
              <option value="500">Less than $500</option>
              <option value="inf">More than $500</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label htmlFor="discountFilter" className="text-gray-800 font-medium">
              Discount:
            </label>
            <select
              id="discountFilter"
              className="border border-gray-300 rounded p-1"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            >
              <option value="all">All</option>
              <option value="10">10% Off</option>
              <option value="20">20% Off</option>
              <option value="30">30% Off</option>
              <option value="40">40% Off</option>
              <option value="50">50% Off</option>
            </select>
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow-md"
          onClick={() => {onFilter({rating: rating, priceRange: priceRange, discount: discount})}}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
