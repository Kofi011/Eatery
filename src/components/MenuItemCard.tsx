import React, { useState } from 'react';
import { Plus, Minus, Flame, Leaf, Shield, Moon } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onAddToCart }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAddToCart = () => {
    setIsAnimating(true);
    onAddToCart(item);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const getBadgeIcon = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'spicy': return <Flame className="w-4 h-4" />;
      case 'vegan': return <Leaf className="w-4 h-4" />;
      case 'gluten-free': return <Shield className="w-4 h-4" />;
      case 'halal': return <Moon className="w-4 h-4" />;
      default: return null;
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'spicy': return 'bg-red-100 text-red-700';
      case 'vegan': return 'bg-green-100 text-green-700';
      case 'gluten-free': return 'bg-yellow-100 text-yellow-700';
      case 'halal': return 'bg-gray-100 text-gray-700';
      case 'popular': return 'bg-yellow-400 text-gray-900';
      case 'new': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
      {/* Image Container */}
      <div className="relative aspect-w-4 aspect-h-3">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {item.badges.map((badge, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColor(badge)}`}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Dietary Icons */}
        <div className="absolute top-3 right-3 flex space-x-1">
          {item.isSpicy && (
            <div className="bg-white/90 p-1.5 rounded-full">
              <Flame className="w-4 h-4 text-red-500" />
            </div>
          )}
          {item.isVegan && (
            <div className="bg-white/90 p-1.5 rounded-full">
              <Leaf className="w-4 h-4 text-green-500" />
            </div>
          )}
          {item.isGlutenFree && (
            <div className="bg-white/90 p-1.5 rounded-full">
              <Shield className="w-4 h-4 text-yellow-500" />
            </div>
          )}
          {item.isHalal && (
            <div className="bg-white/90 p-1.5 rounded-full">
              <Moon className="w-4 h-4 text-gray-600" />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 
            className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {item.name}
          </h3>
          <span 
            className="text-2xl font-bold text-red-500"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            ${item.price}
          </span>
        </div>

        <p 
          className="text-gray-600 text-sm mb-4 line-clamp-2"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {item.description}
        </p>

        {/* Expandable Ingredients */}
        <div className="mb-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-green-600 text-sm font-medium hover:text-green-700 transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {isExpanded ? 'Hide' : 'Show'} ingredients
          </button>
          
          {isExpanded && (
            <div className="mt-2 p-3 bg-gray-50 rounded-lg">
              <div className="flex flex-wrap gap-2">
                {item.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="bg-white px-2 py-1 rounded-full text-xs text-gray-700 border"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className={`w-full bg-red-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-red-600 transition-all duration-200 flex items-center justify-center space-x-2 ${
            isAnimating ? 'scale-95' : 'hover:scale-105'
          }`}
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <Plus className="w-5 h-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};