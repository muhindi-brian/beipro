import React, { useState } from 'react';
import { Header } from '../components/Header';
import { CommodityList } from '../components/CommodityList';
import { PriceSubmissionForm } from '../components/PriceSubmissionForm';
import { PriceChart } from '../components/PriceChart';
import { COMMODITY_CATEGORIES } from '../types/commodity';

export function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState<string>('STAPLE_FOODS');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Commodity Dashboard</h1>
          <div className="mt-4 flex space-x-4 overflow-x-auto">
            {Object.entries(COMMODITY_CATEGORIES).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedCategory === key
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Price Trends</h2>
              <PriceChart />
            </div>
            <CommodityList category={selectedCategory} />
          </div>
          <div className="lg:col-span-1">
            <PriceSubmissionForm />
          </div>
        </div>
      </main>
    </div>
  );
}