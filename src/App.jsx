import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentPage('product-details');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedProduct(null);
  };

  return (
    <>
      {currentPage === 'home' && (
        <HomePage onProductClick={handleProductClick} />
      )}
      
      {currentPage === 'product-details' && selectedProduct && (
        <ProductDetailsPage
          product={selectedProduct}
          onBack={handleBackToHome}
          onProductClick={handleProductClick}
        />
      )}
    </>
  );
}

export default App;