import React from 'react';
import { Search, ShoppingCart, User, MapPin } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
  onCartToggle: () => void;
  onSearch: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartToggle, onSearch }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">🍕</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                FoodieExpress
              </h1>
              <p className="text-xs text-gray-500 flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                Downtown • 25-35 min
              </p>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for dishes..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                style={{ fontFamily: 'Inter, sans-serif' }}
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search */}
            <button className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Search className="w-6 h-6" />
            </button>

            {/* Cart */}
            <button
              onClick={onCartToggle}
              className="relative p-2 text-gray-600 hover:text-red-500 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Profile */}
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};