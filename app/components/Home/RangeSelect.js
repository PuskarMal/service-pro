import React, { useState } from "react";

const RangeSelect = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([100, 1000]);
  const [distanceRange, setDistanceRange] = useState(10);

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(e.target.value);
    setPriceRange(newRange);
    onFilterChange({ priceRange: newRange, distance: distanceRange });
  };

  const handleDistanceChange = (e) => {
    const newDistance = parseInt(e.target.value);
    setDistanceRange(newDistance);
    onFilterChange({ priceRange, distance: newDistance });
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-lg mx-auto space-y-6 mt-[24px]">
      <h3 className="text-lg font-semibold text-gray-800">Filter Services</h3>

      {/* Price Range */}
      <div>
        <label className="text-sm text-gray-600">Price Range (₹)</label>
        <div className="flex items-center space-x-4 mt-1">
          <input
            type="number"
            value={priceRange[0]}
            min={0}
            max={priceRange[1]}
            onChange={(e) => handlePriceChange(e, 0)}
            className="w-24 px-2 py-1 border rounded"
          />
          <span className="text-gray-500">to</span>
          <input
            type="number"
            value={priceRange[1]}
            min={priceRange[0]}
            max={5000}
            onChange={(e) => handlePriceChange(e, 1)}
            className="w-24 px-2 py-1 border rounded"
          />
        </div>
      </div>

      {/* Distance Range */}
      <div>
        <label className="text-sm text-gray-600">Service Radius (km)</label>
        <input
          type="range"
          min="1"
          max="20"
          value={distanceRange}
          onChange={handleDistanceChange}
          className="w-full mt-1"
        />
        <p className="text-sm text-gray-500 mt-1">{distanceRange} km</p>
      </div>
    </div>
  );
};

export default RangeSelect;
