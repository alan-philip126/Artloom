import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import Header from '../components/Header';
import { products } from '../data/productsData';

function ProductDetailsPage({ product, onBack, onProductClick }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleBuyOnWhatsApp = (product) => {
    const message = `Hi! I'm interested in:\n\n*${product.name}*\nPrice: ${product.price}\nCategory: ${product.category}\n\nCould you please provide more details?`;
    const whatsappUrl = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const getSimilarProducts = (currentProduct) => {
    return products.filter(p => 
      p.category === currentProduct.category && p.id !== currentProduct.id
    ).slice(0, 3);
  };

  const similarProducts = getSimilarProducts(product);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Header onLogoClick={onBack} />

      {/* Product Details */}
      <div className="container mx-auto px-6 py-8">
        <button
          onClick={onBack}
          className="mb-6 text-purple-600 hover:text-purple-800 font-medium flex items-center gap-2"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Products
        </button>

        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl p-8">
          {/* Image Gallery */}
          <div>
            <div className="relative mb-4 rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.name} ${idx + 1}`}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-20 h-20 object-cover rounded-xl cursor-pointer transition-all ${
                    currentImageIndex === idx 
                      ? 'ring-4 ring-purple-400 scale-105' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium w-fit mb-3">
              {product.category}
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-3">
              {product.name}
            </h2>
            <p className="text-3xl font-bold text-purple-600 mb-6">
              {product.price}
            </p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Details</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.details}
              </p>
            </div>

            <button
              onClick={() => handleBuyOnWhatsApp(product)}
              className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white py-4 rounded-2xl font-bold text-lg hover:from-green-500 hover:to-emerald-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Buy on WhatsApp
            </button>
          </div>
        </div>

        {/* Similar Products Section */}
        {similarProducts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Similar Products
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {similarProducts.map((similarProduct) => (
                <div
                  key={similarProduct.id}
                  onClick={() => {
                    onProductClick(similarProduct);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={similarProduct.image}
                      alt={similarProduct.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-purple-600 font-medium">
                      {similarProduct.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                      {similarProduct.name}
                    </h3>
                    <p className="text-2xl font-bold text-purple-600">
                      {similarProduct.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetailsPage;