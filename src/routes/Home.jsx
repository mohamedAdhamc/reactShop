import FilterBar from "../components/Filterbar";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import { useState } from "react";
import products from "../data/products";

const Home = () => {
    
      const [filters, setFilters] = useState({rating: "all", priceRange: "all", discount: "all"});
    
      const ratingFilter = (item) => {
        return filters.rating !== "all" ? item.rating > parseInt(filters.rating) : true;
      }

      const priceFilter = (item) => {
        return filters.priceRange !== "all" 
        ? filters.priceRange === "inf" ? item.price > 500 : item.price < parseInt(filters.priceRange)
        : true;
      }
      const applyFilters = (item) => {
        return ratingFilter(item) && priceFilter(item);
      }

      return (
        <div className="home">
          <Navbar />
          <FilterBar onFilter={(filter) => {setFilters(filter)}} />
          <div className="grid grid-cols-3 gap-4">
                {products.filter(applyFilters).map((product) => (
                  <Product
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    description={product.description}
                    rating={product.rating}
                    reviews={product.reviews}
                  />
                ))}
          </div>
          <button onClick={() => {console.log(filters)}}>print</button>
        </div>
      )}
 
export default Home;