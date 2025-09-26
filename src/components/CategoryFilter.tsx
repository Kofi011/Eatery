import React from 'react';
import { Category } from '../types';

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange
}) => {
  return (
    <div className="sticky top-18 z-40 bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => onCategoryChange('all')}
            className={`flex-shrink-0 px-6 py-3 rounded-full font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-green-600 text-white shadow-md'
                : 'bg-green-100 text-green-700 hover:bg-green-200'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            All Items
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex-shrink-0 px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};