import React from 'react';
import { ChefHat, Package, Truck, CheckCircle } from 'lucide-react';

interface OrderProgressProps {
  currentStep: number;
  estimatedTime: number;
}

export const OrderProgress: React.FC<OrderProgressProps> = ({ currentStep, estimatedTime }) => {
  const steps = [
    { id: 1, name: 'Preparing', icon: ChefHat, description: 'Chef is cooking your meal' },
    { id: 2, name: 'Packaging', icon: Package, description: 'Packing your order' },
    { id: 3, name: 'On the way', icon: Truck, description: 'Driver is heading to you' },
    { id: 4, name: 'Delivered', icon: CheckCircle, description: 'Enjoy your meal!' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 
          className="text-2xl font-bold text-gray-900 mb-2"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Order in Progress
        </h2>
        <p className="text-gray-600">
          Estimated delivery: <span className="font-semibold text-green-600">{estimatedTime} minutes</span>
        </p>
      </div>

      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-8 left-8 right-8 h-1 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-gradient-to-r from-yellow-400 to-green-500 rounded-full transition-all duration-1000"
            style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
          />
        </div>

        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step) => {
            const Icon = step.icon;
            const isCompleted = currentStep > step.id;
            const isActive = currentStep === step.id;
            
            return (
              <div key={step.id} className="flex flex-col items-center">
                <div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isCompleted 
                      ? 'bg-green-500 text-white scale-110' 
                      : isActive 
                        ? 'bg-yellow-400 text-gray-900 scale-110 animate-pulse' 
                        : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-center mt-4">
                  <p 
                    className={`font-semibold ${
                      isCompleted || isActive ? 'text-gray-900' : 'text-gray-500'
                    }`}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {step.name}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Live Updates */}
      <div className="mt-8 p-4 bg-green-50 rounded-xl border border-green-200">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <p className="text-green-800 font-medium">
            {currentStep === 1 && "Your order is being prepared by our chef"}
            {currentStep === 2 && "Almost ready! We're packing your order now"}
            {currentStep === 3 && "Your driver is on the way to your location"}
            {currentStep === 4 && "Order delivered! Thank you for choosing us"}
          </p>
        </div>
      </div>
    </div>
  );
};