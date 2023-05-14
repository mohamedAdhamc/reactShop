import React from 'react';

const Banner = () => {
  return (
    <div className="bg-gray-100 py-12 mb-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="relative bg-cover bg-center w-full md:w-2/3 lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full h-full object-cover "
              src="https://images.pexels.com/photos/8538756/pexels-photo-8538756.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Chocolates Banner"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
              <h2 className="text-2xl md:text-4xl text-white font-bold mb-4 text-center">
                Grab up to 50% off on selected chocolates this weekend
              </h2>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
