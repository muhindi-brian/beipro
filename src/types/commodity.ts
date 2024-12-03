export type CommodityCategory = 
  | 'STAPLE_FOODS'
  | 'EDIBLE_OILS'
  | 'SUGAR'
  | 'BUILDING_MATERIALS'
  | 'AGRICULTURAL'
  | 'ENERGY';

export interface PackageSize {
  id: string;
  size: number;
  unit: string;
}

export interface Commodity {
  id: string;
  name: string;
  category: CommodityCategory;
  unit: string;
  packageSizes: PackageSize[];
  currentPrice: number;
  previousPrice: number;
  priceChange: number;
  location: string;
  lastUpdated: string;
  predictedPrice?: number;
  confidence?: number;
  marketTrend?: 'up' | 'down' | 'stable';
}

export interface PriceSubmission {
  commodityId: string;
  packageSizeId: string;
  price: number;
  location: string;
  date: string;
  quantity: number;
}

export const COMMODITY_CATEGORIES = {
  STAPLE_FOODS: 'Staple Foods',
  EDIBLE_OILS: 'Edible Oils',
  SUGAR: 'Sugar',
  BUILDING_MATERIALS: 'Building Materials',
  AGRICULTURAL: 'Agricultural Products',
  ENERGY: 'Energy Commodities'
} as const;

export const PACKAGE_SIZES: Record<string, PackageSize[]> = {
  'rice': [
    { id: 'rice-25kg', size: 25, unit: 'kg' },
    { id: 'rice-50kg', size: 50, unit: 'kg' }
  ],
  'maize': [
    { id: 'maize-50kg', size: 50, unit: 'kg' },
    { id: 'maize-90kg', size: 90, unit: 'kg' }
  ],
  'sugar': [
    { id: 'sugar-25kg', size: 25, unit: 'kg' },
    { id: 'sugar-50kg', size: 50, unit: 'kg' }
  ],
  'sunflower-oil': [
    { id: 'oil-20l', size: 20, unit: 'liter' }
  ]
};

export const COMMODITIES = [
  // Staple Foods
  { id: 'maize', name: 'Maize', category: 'STAPLE_FOODS', unit: 'kg', packageSizes: PACKAGE_SIZES['maize'] },
  { id: 'beans', name: 'Beans', category: 'STAPLE_FOODS', unit: 'kg', packageSizes: [{ id: 'beans-90kg', size: 90, unit: 'kg' }] },
  { id: 'rice', name: 'Rice', category: 'STAPLE_FOODS', unit: 'kg', packageSizes: PACKAGE_SIZES['rice'] },
  { id: 'wheat', name: 'Wheat', category: 'STAPLE_FOODS', unit: 'kg', packageSizes: [{ id: 'wheat-50kg', size: 50, unit: 'kg' }] },
  { id: 'millet', name: 'Millet', category: 'STAPLE_FOODS', unit: 'kg', packageSizes: [{ id: 'millet-50kg', size: 50, unit: 'kg' }] },
  { id: 'sorghum', name: 'Sorghum', category: 'STAPLE_FOODS', unit: 'kg', packageSizes: [{ id: 'sorghum-50kg', size: 50, unit: 'kg' }] },
  { id: 'maize-flour', name: 'Maize Flour', category: 'STAPLE_FOODS', unit: 'kg', packageSizes: [{ id: 'maize-flour-25kg', size: 25, unit: 'kg' }] },
  { id: 'wheat-flour', name: 'Wheat Flour', category: 'STAPLE_FOODS', unit: 'kg', packageSizes: [{ id: 'wheat-flour-25kg', size: 25, unit: 'kg' }] },

  // Edible Oils
  { id: 'sunflower-oil', name: 'Sunflower Oil', category: 'EDIBLE_OILS', unit: 'liter', packageSizes: PACKAGE_SIZES['sunflower-oil'] },
  { id: 'corn-oil', name: 'Corn Oil', category: 'EDIBLE_OILS', unit: 'liter', packageSizes: [{ id: 'corn-oil-20l', size: 20, unit: 'liter' }] },
  { id: 'soybean-oil', name: 'Soybean Oil', category: 'EDIBLE_OILS', unit: 'liter', packageSizes: [{ id: 'soybean-oil-20l', size: 20, unit: 'liter' }] },
  { id: 'olive-oil', name: 'Olive Oil', category: 'EDIBLE_OILS', unit: 'liter', packageSizes: [{ id: 'olive-oil-5l', size: 5, unit: 'liter' }] },
  { id: 'palm-oil', name: 'Palm Oil', category: 'EDIBLE_OILS', unit: 'liter', packageSizes: [{ id: 'palm-oil-20l', size: 20, unit: 'liter' }] },

  // Sugar
  { id: 'granulated-sugar', name: 'Granulated Sugar', category: 'SUGAR', unit: 'kg', packageSizes: PACKAGE_SIZES['sugar'] },
  { id: 'brown-sugar', name: 'Brown Sugar', category: 'SUGAR', unit: 'kg', packageSizes: PACKAGE_SIZES['sugar'] },

  // Building Materials
  { id: 'cement', name: 'Cement', category: 'BUILDING_MATERIALS', unit: 'bag', packageSizes: [{ id: 'cement-50kg', size: 50, unit: 'kg' }] },
  { id: 'steel-bars', name: 'Steel Bars', category: 'BUILDING_MATERIALS', unit: 'piece', packageSizes: [{ id: 'steel-bars-12m', size: 12, unit: 'm' }] },
  { id: 'roofing', name: 'Roofing Materials', category: 'BUILDING_MATERIALS', unit: 'piece', packageSizes: [{ id: 'roofing-3m', size: 3, unit: 'm' }] },

  // Agricultural Products
  { id: 'potatoes', name: 'Potatoes', category: 'AGRICULTURAL', unit: 'kg', packageSizes: [{ id: 'potatoes-50kg', size: 50, unit: 'kg' }] },
  { id: 'onions', name: 'Onions', category: 'AGRICULTURAL', unit: 'kg', packageSizes: [{ id: 'onions-25kg', size: 25, unit: 'kg' }] },
  { id: 'tomatoes', name: 'Tomatoes', category: 'AGRICULTURAL', unit: 'kg', packageSizes: [{ id: 'tomatoes-20kg', size: 20, unit: 'kg' }] },
  { id: 'cabbage', name: 'Cabbage', category: 'AGRICULTURAL', unit: 'kg', packageSizes: [{ id: 'cabbage-25kg', size: 25, unit: 'kg' }] },
  { id: 'green-grams', name: 'Green Grams', category: 'AGRICULTURAL', unit: 'kg', packageSizes: [{ id: 'green-grams-90kg', size: 90, unit: 'kg' }] },

  // Energy
  { id: 'lpg', name: 'Cooking Gas (LPG)', category: 'ENERGY', unit: 'kg', packageSizes: [{ id: 'lpg-13kg', size: 13, unit: 'kg' }] },
  { id: 'charcoal', name: 'Charcoal', category: 'ENERGY', unit: 'kg', packageSizes: [{ id: 'charcoal-90kg', size: 90, unit: 'kg' }] },
  { id: 'firewood', name: 'Firewood', category: 'ENERGY', unit: 'bundle', packageSizes: [{ id: 'firewood-bundle', size: 1, unit: 'bundle' }] }
] as const;