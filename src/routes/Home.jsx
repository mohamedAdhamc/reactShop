import FilterBar from "../components/Filterbar";
import Product from "../components/Product";
import Banner from "../components/Discountbanner";
import { useState } from "react";
import products from "../data/products";

const Home = ({cartItemIds, setCartItemIds}) => {
      const [filters, setFilters] = useState({rating: "all", priceRange: "all", discount: "all"});
    
      const ratingFilter = (item) => {
        return filters.rating !== "all" ? item.rating > parseInt(filters.rating) : true;
      }

      const priceFilter = (item) => {
        // "inf" represents 500 and up
        return filters.priceRange !== "all" 
        ? filters.priceRange === "inf" ? item.price > 500 : item.price < parseInt(filters.priceRange)
        : true;
      }

      const applyFilters = (item) => {
        // Only return items that pass all filters
        return ratingFilter(item) && priceFilter(item);
      }

      return (
        <div className="home"> 
          <Banner/>
          <FilterBar onFilter={(filter) => {setFilters(filter)}} />
          <div className="grid grid-cols-3 gap-4">
                {products.filter(applyFilters).map((product) => (
                  <Product
                    id={product.id}
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    description={product.description}
                    rating={product.rating}
                    reviews={product.reviews}
                    cartItemIds={cartItemIds}
                    setCartItemIds={setCartItemIds}
                  />
                ))}
          </div>
        </div>
      )}
 
export default Home;