import React from 'react';
import { ArrowUpRight, ArrowDownRight, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import type { Commodity } from '../types/commodity';

interface CommodityCardProps {
  commodity: Commodity;
}

export function CommodityCard({ commodity }: CommodityCardProps) {
  const priceIncreased = commodity.priceChange > 0;
  const defaultPackageSize = commodity.packageSizes[0];

  const getTrendIcon = () => {
    switch (commodity.marketTrend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-red-500" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-green-500" />;
      default:
        return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{commodity.name}</h3>
          <p className="text-sm text-gray-500">{commodity.location}</p>
        </div>
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
          ${priceIncreased ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
          {priceIncreased ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
          {Math.abs(commodity.priceChange)}%
        </span>
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-baseline">
          <p className="text-2xl font-bold text-gray-900">
            KES {commodity.currentPrice.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500">per {defaultPackageSize.size}{defaultPackageSize.unit}</p>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Previous: KES {commodity.previousPrice.toLocaleString()}
        </p>
      </div>

      {commodity.predictedPrice && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Predicted Price</p>
              <p className="text-lg font-semibold text-gray-900">
                KES {commodity.predictedPrice.toLocaleString()}
              </p>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center space-x-1">
                {getTrendIcon()}
                <span className="text-sm font-medium">
                  {commodity.confidence}% confidence
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}