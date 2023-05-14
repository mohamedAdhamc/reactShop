import React from 'react';
import CartItems from './CartItems';
import OrderSummary from './OrderSummary';
import CheckoutButton from './CheckoutButton';

const CartPage = ({cartItemIds, setCartItemIds}) => {
  // Fetch cart data and store it in a state

  return (
    <div className=" bg-gray-50 shadow-md rounded-lg overflow-hidden">
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 pr-4">
            <CartItems cartItemIds={cartItemIds} setCartItemIds={setCartItemIds}/>
            {/* Render other components related to cart items */}
          </div>
          <div className="w-full md:w-1/3">
            <OrderSummary subtotal={100} discount={20} total={80} />
            {/* Render other components related to order summary */}
            <CheckoutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
