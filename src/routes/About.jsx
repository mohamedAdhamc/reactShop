import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  }

  const loremIpsum = `Welcome to our online store! We are passionate about providing the best shopping experience for all our customers. With a wide range of high-quality products, exceptional customer service, and secure payment options, we strive to make your online shopping journey convenient and enjoyable.

At our store, we offer a diverse selection of products to cater to your needs. Whether you're looking for trendy fashion apparel, stylish accessories, cutting-edge electronics, or home essentials, we've got you covered. Our team carefully curates each product to ensure they meet our quality standards, so you can shop with confidence.

We believe in delivering exceptional value to our customers. That's why we regularly offer exclusive deals, discounts, and promotions to help you save on your favorite items. Stay tuned for our latest offers and make sure to sign up for our newsletter to never miss out on exciting deals!

Customer satisfaction is our top priority. Our dedicated support team is always ready to assist you with any inquiries, concerns, or product recommendations. We want you to have a seamless shopping experience from start to finish, and we're here to help every step of the way.

Thank you for choosing us as your preferred online store. We appreciate your trust and loyalty. Start exploring our extensive collection today and enjoy the convenience of shopping from the comfort of your own home. Happy shopping!`;

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-center mb-6">
        <img
          src="https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Smiling Face"
          className="w-[15vw] h-[25vh] rounded-full"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">{loremIpsum}</p>
      <div className="flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default About;
