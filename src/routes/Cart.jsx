import CartPage from "../components/cart-page-components/CartPage";

const Cart = () => {
    const wStyle = {
        width: '65vw',
    };
    return (
    <div style={wStyle}>
      <h1 className=" pb-[8vh]">My Shopping Cart</h1>
      <CartPage />
    </div>
);
}
 
export default Cart;