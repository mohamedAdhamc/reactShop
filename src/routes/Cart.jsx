import CartPage from "../components/cart-page-components/CartPage";

const Cart = ({cartItemIds, setCartItemIds}) => {
    const wStyle = {
        width: '65vw',
    };
    return (
    <div style={wStyle}>
      <h1 className=" pb-[8vh]">Shopping Cart</h1>
      <CartPage cartItemIds={cartItemIds} setCartItemIds={setCartItemIds}/>
    </div>
);
}
 
export default Cart;