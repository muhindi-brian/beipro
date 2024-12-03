import React from 'react';
import { CommodityCard } from './CommodityCard';
import { PriceChart } from './PriceChart';
import type { Commodity } from '../types/commodity';

const mockCommodities: Commodity[] = [
  {
    id: '1',
    name: 'Maize',
    category: 'STAPLE_FOODS',
    unit: 'kg',
    currentPrice: 150,
    previousPrice: 140,
    priceChange: 7.14,
    location: 'Nairobi'
  },
  {
    id: '2',
    name: 'Rice',
    category: 'STAPLE_FOODS',
    unit: 'kg',
    currentPrice: 180,
    previousPrice: 190,
    priceChange: -5.26,
    location: 'Mombasa'
  }
];

export function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCommodities.map((commodity) => (
          <CommodityCard key={commodity.id} commodity={commodity} />
        ))}
      </div>
      <div className="mt-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Price Trends</h2>
          <PriceChart />
        </div>
      </div>
    </div>
  );
}