export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  badges: string[];
  ingredients: string[];
  isSpicy: boolean;
  isVegan: boolean;
  isGlutenFree: boolean;
  isHalal: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  color: string;
}

export interface OrderStatus {
  id: string;
  status: 'cooking' | 'packaging' | 'on-the-way' | 'delivered';
  estimatedTime: number;
  currentStep: number;
}