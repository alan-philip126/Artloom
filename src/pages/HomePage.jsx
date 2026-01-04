import React from 'react';
import Header from '../components/Header';
import BannerCarousel from '../components/BannerCarousel';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { products } from '../data/productsData';

function HomePage({ onProductClick }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Header />
      <BannerCarousel />
      
      {/* Products Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Collection
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => onProductClick(product)}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;