import React from 'react';
import CartItems from './CartItems';
import OrderSummary from './OrderSummary';
import CheckoutButton from './CheckoutButton';
import products from '../../data/products';

const CartPage = ({cartItemIds, setCartItemIds}) => {
  // Fetch cart data and store it in a state
  const cartItems = products.filter((item) => {return cartItemIds.includes(item.id)})
  let subtotal = 0;
  let discount = 0;
  let total = 0;

  cartItems.map((item) => {
    subtotal += item.price;
    discount += item.discount * 0.01 * item.price;
    total += (100 - item.discount) * 0.01 * item.price;
  })

  return (
    <div className=" bg-gray-50 shadow-md rounded-lg overflow-hidden">
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 dark:text-gray-700">Your Cart</h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 pr-4">
            <CartItems cartItemIds={cartItemIds} setCartItemIds={setCartItemIds}/>
            {/* Render other components related to cart items */}
          </div>
          <div className="w-full md:w-1/3">
            <OrderSummary subtotal={subtotal.toFixed(2)} discount={discount.toFixed(2)} total={total.toFixed(2)} />
            {/* Render other components related to order summary */}
            <CheckoutButton cartItemIds={cartItemIds}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
