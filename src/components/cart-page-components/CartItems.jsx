import CartItem from './CartItem';
import products from '../../data/products';

const CartItems = ({cartItemIds, setCartItemIds}) => {

  const cartItems = products.filter((item) => {return cartItemIds.includes(item.id)})

  return (
    <div>
      {cartItems.map((item) => (
          <CartItem key={item.id} item={item} id={item.id} cartItemIds={cartItemIds} setCartItemIds={setCartItemIds}/>
        ))
      }
    </div>
  );
};

export default CartItems;
