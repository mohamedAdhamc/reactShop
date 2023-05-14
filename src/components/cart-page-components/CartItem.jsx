import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="flex items-center py-4 border-b border-gray-300">
      <img className="w-16 h-16 rounded" src={item.image} alt={item.title} />
      <div className="ml-4">
        <h3 className="font-bold">{item.title}</h3>
        <p className="text-gray-600">Price: ${item.price}</p>
        {/* Render other item details like quantity, total price, etc. */}
      </div>
    </div>
  );
};

export default CartItem;
