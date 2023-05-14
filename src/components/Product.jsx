const Product = ({icon, title, price}) => {
    return (
        <div className="product">
            Product: {icon}, {title}, {price}
        </div>
    );
}
 
export default Product;