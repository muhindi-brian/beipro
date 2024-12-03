import React, { useState, useEffect } from 'react';
import { COMMODITIES } from '../types/commodity';
import type { PackageSize } from '../types/commodity';

export function PriceSubmissionForm() {
  const [formData, setFormData] = useState({
    commodityId: '',
    packageSizeId: '',
    price: '',
    location: '',
    quantity: '1'
  });

  const [packageSizes, setPackageSizes] = useState<PackageSize[]>([]);

  useEffect(() => {
    if (formData.commodityId) {
      const commodity = COMMODITIES.find(c => c.id === formData.commodityId);
      setPackageSizes(commodity?.packageSizes || []);
      setFormData(prev => ({ ...prev, packageSizeId: '' }));
    }
  }, [formData.commodityId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with API
    console.log('Submitted:', formData);
    setFormData({ commodityId: '', packageSizeId: '', price: '', location: '', quantity: '1' });
  };

  const calculateTotalPrice = () => {
    if (!formData.price || !formData.quantity) return 0;
    return parseFloat(formData.price) * parseFloat(formData.quantity);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Submit Bulk Price Update</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="commodity" className="block text-sm font-medium text-gray-700">
            Commodity
          </label>
          <select
            id="commodity"
            value={formData.commodityId}
            onChange={(e) => setFormData({ ...formData, commodityId: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            required
          >
            <option value="">Select a commodity</option>
            {COMMODITIES.map((commodity) => (
              <option key={commodity.id} value={commodity.id}>
                {commodity.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="packageSize" className="block text-sm font-medium text-gray-700">
            Package Size
          </label>
          <select
            id="packageSize"
            value={formData.packageSizeId}
            onChange={(e) => setFormData({ ...formData, packageSizeId: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            required
          >
            <option value="">Select package size</option>
            {packageSizes.map((size) => (
              <option key={size.id} value={size.id}>
                {size.size} {size.unit}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price per Package (KES)
          </label>
          <input
            type="number"
            id="price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            required
            min="0"
            step="0.01"
          />
        </div>

        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
            Quantity (Number of Packages)
          </label>
          <input
            type="number"
            id="quantity"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            required
            min="1"
            step="1"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            required
            placeholder="e.g., Nairobi"
          />
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <p className="text-sm font-medium text-gray-700">Total Value</p>
          <p className="text-lg font-bold text-emerald-600">
            KES {calculateTotalPrice().toLocaleString()}
          </p>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        >
          Submit Price
        </button>
      </form>
    </div>
  );
}