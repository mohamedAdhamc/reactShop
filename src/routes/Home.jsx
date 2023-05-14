import FilterBar from "../components/Filterbar";
import Product from "../components/Product";
import Banner from "../components/Discountbanner";
import { useState } from "react";
import products from "../data/products";

const Home = ({cartItemIds, setCartItemIds}) => {
      const [filters, setFilters] = useState({rating: "all", priceRange: "all", reviews: "all", sort: "default"});
    
      const ratingFilter = (item) => {
        return filters.rating !== "all" ? item.rating > parseInt(filters.rating) : true;
      }

      const priceFilter = (item) => {
        // "inf" represents 500 and up
        return filters.priceRange !== "all" 
        ? filters.priceRange === "inf" ? item.price > 500 : item.price < parseInt(filters.priceRange)
        : true;
      }

      const reviewsFilter = (item) => {
        return filters.reviews !== "all" ? item.reviews > parseInt(filters.reviews) : true;
      }

      const applyFilters = (item) => {
        // Only return items that pass all filters
        return ratingFilter(item) && priceFilter(item) && reviewsFilter(item);
      }

      const sortProducts = (products) => {
        if (filters.sort == "default") {
          return products;
        }
        else if (filters.sort == "price") {
          return products.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
        }
        else if (filters.sort == "rating") {
          return products.sort((a,b) => (a.rating < b.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0))
        }
        else if (filters.sort == "reviews") {
          return products.sort((a,b) => (a.reviews < b.reviews) ? 1 : ((b.reviews > a.reviews) ? -1 : 0))
        }
        else if (filters.sort == "discount") {
          return products.sort((a,b) => (a.discount < b.discount) ? 1 : ((b.discount > a.discount) ? -1 : 0))
        }
        
        return products;
      }

      return (
        <div className="home"> 
          <Banner/>
          <FilterBar onFilter={(filter) => {setFilters(filter)}} />
          <div className="grid grid-cols-3 gap-4">
                {sortProducts(products).filter(applyFilters).map((product) => (
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
                    discount={product.discount}
                  />
                ))}
          </div>
        </div>
      )}
 
export default Home;