import React, { useState } from 'react';
import { Search, Clock, Star, Flame } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <section className="relative bg-gradient-to-br from-red-50 to-orange-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            What are you{' '}
            <span className="text-red-500 relative">
              craving
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 rounded-full"></span>
            </span>
            ?
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Delicious meals delivered fresh to your door in 30 minutes or less
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for dishes, cuisines, or restaurants..."
                className="w-full pl-16 pr-6 py-4 text-lg bg-white border-2 border-gray-200 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors font-semibold"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Search
              </button>
            </div>
          </form>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-green-500" />
              <span>25-35 min delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span>4.8 rating (2.3k reviews)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Flame className="w-5 h-5 text-red-500" />
              <span>Fresh & hot guaranteed</span>
            </div>
          </div>
        </div>

        {/* Featured Dishes Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              name: "Signature Burger",
              image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
              price: "$12.99",
              badge: "Popular"
            },
            {
              name: "Margherita Pizza",
              image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
              price: "$16.99",
              badge: "Chef's Choice"
            },
            {
              name: "Fresh Salad Bowl",
              image: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg",
              price: "$11.99",
              badge: "Healthy"
            }
          ].map((dish, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {dish.badge}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {dish.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-red-500" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {dish.price}
                  </span>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-600 transition-colors">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};