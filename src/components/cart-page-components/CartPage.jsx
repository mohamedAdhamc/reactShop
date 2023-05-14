import React from 'react';
import CartItems from './CartItems';
import OrderSummary from './OrderSummary';
import CheckoutButton from './CheckoutButton';

const CartPage = () => {
  // Fetch cart data and store it in a state

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <CartItems />
          {/* Render other components related to cart items */}
        </div>
        <div>
          <OrderSummary subtotal={100} discount={20} total={80} />
          {/* Render other components related to order summary */}
          <CheckoutButton />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
