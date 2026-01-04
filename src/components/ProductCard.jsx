import React from 'react';
import { Heart } from 'lucide-react';

function ProductCard({ product, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer"
    >
      <div className="relative overflow-hidden group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-all">
            <Heart className="w-5 h-5 text-pink-500" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium mb-3">
          {product.category}
        </span>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-purple-600">
            {product.price}
          </span>
          <button className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-2 rounded-full font-medium hover:from-pink-500 hover:to-purple-600 transition-all">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;