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
          price: 14.99,
          imageUrl: 'https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          rating: 3.8,
          reviews: 5,
        },
        // Add more products as needed
      ];
    
      const [filters, setFilters] = useState({});
    
      const handleFilter = (selectedFilters) => {
        // Update the filters state with the selected filters
        setFilters(selectedFilters);
      };
    
      return (
        <div className="home">
          {/* <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1> */}
          <Navbar />
          <FilterBar onFilter={handleFilter} />
         <div className="grid grid-cols-3 gap-4">
              {products.map((product) => (
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
        </div>
      )}
 
export default Home;