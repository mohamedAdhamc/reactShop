import React, { useState } from 'react';

const FilterBar = ({ onFilter }) => {
  const [rating, setRating] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [discount, setDiscount] = useState('all');

  return (
    <div className="bg-gray-100 py-4 px-6 shadow-md mb-5">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-4">
          <FilterItem id={"ratingFilter"} label={"Rating:"} onChange={(e) => setRating(e.target.value)}
            options={["All", "4 Stars & Up", "3 Stars & Up", "2 Stars & Up", "1 Stars & Up",,]}
            optionValues={["all", "4", "3", "2", "1"]} value={rating}
          />

          <FilterItem id={"priceFilter"} label={"Price Range:"} onChange={(e) => setPriceRange(e.target.value)}
            options={["All", "Less than $50", "Less than $100", "Less than $200", "Less than $500", "More than $500"]}
            optionValues={["all", "50", "100", "200", "500", "inf"]} value={priceRange}
          />

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

const FilterItem = ({ id, label, value, onChange, options, optionValues }) => {
  return (
    <div className="flex items-center space-x-2">
            <label htmlFor={id} className="text-gray-800 font-medium">
              {label}
            </label>
            <select
              id={id}
              className="border border-gray-300 rounded p-1"
              value={value}
              onChange={onChange}
            >
              {options.map((option, i) => {
                return (
                  <option value={optionValues[i]}>{option}</option>
                )
              })}
            </select>
          </div>
  );
}

export default FilterBar;
