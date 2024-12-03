import React from 'react';
import { CommodityCard } from './CommodityCard';
import { COMMODITIES } from '../types/commodity';
import type { Commodity } from '../types/commodity';

// Mock data generator
const generateMockData = (commodity: typeof COMMODITIES[number]): Commodity => {
  const currentPrice = Math.random() * 1000 + 100;
  const previousPrice = currentPrice * (1 + (Math.random() - 0.5) * 0.2);
  return {
    ...commodity,
    currentPrice: Math.round(currentPrice * 100) / 100,
    previousPrice: Math.round(previousPrice * 100) / 100,
    priceChange: Math.round(((currentPrice - previousPrice) / previousPrice) * 100 * 100) / 100,
    location: 'Nairobi',
    lastUpdated: new Date().toISOString()
  };
};

interface CommodityListProps {
  category: string;
}

export function CommodityList({ category }: CommodityListProps) {
  const commodities = COMMODITIES
    .filter((c) => c.category === category)
    .map(generateMockData);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {commodities.map((commodity) => (
        <CommodityCard key={commodity.id} commodity={commodity} />
      ))}
    </div>
  );
}