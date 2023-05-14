import React from 'react';

const CheckoutButton = () => {
  const handleCheckout = () => {
    // Perform checkout process
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      onClick={handleCheckout}
    >
    Proceed to Checkout
    </button>
  );
};

export default CheckoutButton;
