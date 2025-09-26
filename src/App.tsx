import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { MenuItemCard } from './components/MenuItemCard';
import { CartDrawer } from './components/CartDrawer';
import { OrderProgress } from './components/OrderProgress';
import { useCart } from './hooks/useCart';
import { categories, menuItems } from './data/menuData';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showOrderProgress, setShowOrderProgress] = useState(false);
  
  const {
    cartItems,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleCart,
    totalItems,
    totalPrice
  } = useCart();

  // Filter menu items based on category and search
  const filteredItems = useMemo(() => {
    let filtered = menuItems;
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  }, [activeCategory, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleAddToCart = (item: any) => {
    addToCart(item);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartItemCount={totalItems}
        onCartToggle={toggleCart}
        onSearch={handleSearch}
      />
      
      <Hero onSearch={handleSearch} />
      
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Menu Items */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {searchQuery && (
          <div className="mb-8">
            <h2 
              className="text-2xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Search Results for "{searchQuery}"
            </h2>
            <p className="text-gray-600">
              {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} found
            </p>
          </div>
        )}

        {filteredItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 
              className="text-xl font-semibold text-gray-900 mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              No items found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or browse our categories
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </main>

      {/* Order Progress Demo */}
      {showOrderProgress && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full">
            <OrderProgress currentStep={2} estimatedTime={25} />
            <button
              onClick={() => setShowOrderProgress(false)}
              className="mt-6 w-full bg-gray-200 text-gray-800 py-3 px-6 rounded-full font-semibold hover:bg-gray-300 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <CartDrawer
        isOpen={isCartOpen}
        onClose={toggleCart}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        totalPrice={totalPrice}
      />

      {/* Demo Order Progress Button */}
      {totalItems > 0 && (
        <button
          onClick={() => setShowOrderProgress(true)}
          className="fixed bottom-6 left-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition-colors z-40"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          View Order Progress
        </button>
      )}
    </div>
  );
}

export default App;
