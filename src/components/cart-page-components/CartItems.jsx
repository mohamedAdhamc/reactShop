import CartItem from './CartItem';

const CartItems = () => {
  // Fetch cart items from the cart data

  //--temporarily have place holder card items
  const cartItems = [
    {
      id: 1,
      title: "Product 1",
      price: 19.99,
      image: "https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Product 2",
      price: 29.99,
      image: "https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Product 3",
      price: 9.99,
      image: "https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div>
      {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))
      }
    </div>
  );
};

export default CartItems;
