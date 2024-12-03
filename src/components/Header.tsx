import React from 'react';
import { TrendingUp, Bell, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-emerald-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">BeiPro by CariBumi</span>
          </div>
          <nav className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">
              <Bell className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <User className="h-6 w-6" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}