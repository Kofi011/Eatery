import { MenuItem, Category } from '../types';

export const categories: Category[] = [
  { id: 'burgers', name: 'Burgers', image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg', color: '#D6453F' },
  { id: 'pizza', name: 'Pizza', image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg', color: '#F6C447' },
  { id: 'salads', name: 'Salads', image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg', color: '#3E7C59' },
  { id: 'pasta', name: 'Pasta', image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg', color: '#F39C12' },
  { id: 'desserts', name: 'Desserts', image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg', color: '#E74C3C' },
  { id: 'drinks', name: 'Drinks', image: 'https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg', color: '#B3E9D3' }
];

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Classic Beef Burger',
    description: 'Juicy beef patty with fresh lettuce, tomato, and our signature sauce',
    price: 12.99,
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
    category: 'burgers',
    badges: ['Popular'],
    ingredients: ['Beef patty', 'Lettuce', 'Tomato', 'Onion', 'Pickles', 'Special sauce'],
    isSpicy: false,
    isVegan: false,
    isGlutenFree: false,
    isHalal: true
  },
  {
    id: '2',
    name: 'Spicy Chicken Deluxe',
    description: 'Crispy chicken breast with jalapeños and spicy mayo',
    price: 14.99,
    image: 'https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg',
    category: 'burgers',
    badges: ['Spicy', 'New'],
    ingredients: ['Chicken breast', 'Jalapeños', 'Spicy mayo', 'Lettuce', 'Tomato'],
    isSpicy: true,
    isVegan: false,
    isGlutenFree: false,
    isHalal: true
  },
  {
    id: '3',
    name: 'Margherita Pizza',
    description: 'Fresh mozzarella, basil, and tomato sauce on crispy crust',
    price: 16.99,
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
    category: 'pizza',
    badges: ['Classic'],
    ingredients: ['Mozzarella', 'Fresh basil', 'Tomato sauce', 'Pizza dough'],
    isSpicy: false,
    isVegan: false,
    isGlutenFree: false,
    isHalal: true
  },
  {
    id: '4',
    name: 'Mediterranean Salad',
    description: 'Mixed greens with feta, olives, and balsamic dressing',
    price: 11.99,
    image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg',
    category: 'salads',
    badges: ['Healthy', 'Vegetarian'],
    ingredients: ['Mixed greens', 'Feta cheese', 'Olives', 'Cherry tomatoes', 'Balsamic dressing'],
    isSpicy: false,
    isVegan: false,
    isGlutenFree: true,
    isHalal: true
  },
  {
    id: '5',
    name: 'Vegan Buddha Bowl',
    description: 'Quinoa, roasted vegetables, and tahini dressing',
    price: 13.99,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    category: 'salads',
    badges: ['Vegan', 'Healthy'],
    ingredients: ['Quinoa', 'Roasted vegetables', 'Tahini dressing', 'Chickpeas', 'Avocado'],
    isSpicy: false,
    isVegan: true,
    isGlutenFree: true,
    isHalal: true
  },
  {
    id: '6',
    name: 'Creamy Carbonara',
    description: 'Traditional pasta with pancetta, eggs, and parmesan',
    price: 15.99,
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
    category: 'pasta',
    badges: ['Traditional'],
    ingredients: ['Pasta', 'Pancetta', 'Eggs', 'Parmesan', 'Black pepper'],
    isSpicy: false,
    isVegan: false,
    isGlutenFree: false,
    isHalal: false
  },
  {
    id: '7',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with molten center and vanilla ice cream',
    price: 8.99,
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
    category: 'desserts',
    badges: ['Popular', 'Sweet'],
    ingredients: ['Dark chocolate', 'Butter', 'Eggs', 'Sugar', 'Vanilla ice cream'],
    isSpicy: false,
    isVegan: false,
    isGlutenFree: false,
    isHalal: true
  },
  {
    id: '8',
    name: 'Fresh Mango Smoothie',
    description: 'Tropical mango blended with coconut milk and lime',
    price: 6.99,
    image: 'https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg',
    category: 'drinks',
    badges: ['Fresh', 'Tropical'],
    ingredients: ['Fresh mango', 'Coconut milk', 'Lime juice', 'Honey'],
    isSpicy: false,
    isVegan: true,
    isGlutenFree: true,
    isHalal: true
  }
];