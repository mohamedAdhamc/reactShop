import React from 'react';

const CartItem = ({ item, id, cartItemIds, setCartItemIds }) => {
  const removeItem = () => {
    setCartItemIds(cartItemIds.filter((cartItemId) => {return cartItemId != id}));
  }

  return (
    <div className="flex items-start justify-between py-4 border-b border-gray-300">
      <img className="w-16 h-16 rounded" src={item.imageUrl} alt={item.title} />
      <div className="ml-4 flex-grow">
        <h3 className="font-bold dark:text-gray-700">{item.title}</h3>
        <p className="text-gray-600">Price: ${item.price}</p>
        {/* Render other item details like quantity, total price, etc. */}
      </div>
      <button
        onClick={removeItem}
        className="text-red-600 bg-transparent hover:text-black hover:border-black rounded p-1 transition-all duration-300"
      >
        X
      </button>
    </div>
  );
};

export default CartItem;
