import FilterBar from "../components/Filterbar";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import { useState } from "react";


const Home = () => {
    const products = [
        {
          id: 1,
          title: 'Product 1',
          price: 9.99,
          imageUrl: 'https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          rating: 4.5,
          reviews: 10,
        },
        {
          id: 2,
          title: 'Product 2',
          price: 74.99,
          imageUrl: 'https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          rating: 3.8,
          reviews: 5,
        },
        {
          id: 3,
          title: 'Product 3',
          price: 149.99,
          imageUrl: 'https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          rating: 2.9,
          reviews: 57,
        },
        // Add more products as needed
      ];
    
      const [filters, setFilters] = useState({rating: "all", priceRange: "all", discount: "all"});
    
      const applyFilters = (item) => {
        if (filters.rating !== "all") {
          return item.rating > parseInt(filters.rating);
        }
        if (filters.priceRange !== "all") {
          return filters.priceRange === "inf" ? item.price > 500 : item.price < parseInt(filters.priceRange);
        }
        return true;
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