/*import { useState } from "react";

const Sidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    price: "",
    color: [],
    size: [],
  });

  const handleChange = (e, category) => {
    const { value, checked } = e.target;
    
    // Update the filter state for categories (color, size)
    setFilters((prev) => {
      const updatedCategory = checked
        ? [...prev[category], value]
        : prev[category].filter((item) => item !== value);
      
      return { ...prev, [category]: updatedCategory };
    });

    // Pass the updated filter state to parent
    onFilterChange({ ...filters, [category]: filters[category] });
  };

  return (
    <div className="w-64 bg-black text-white p-4 h-screen top-0 left-0">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      <label className="block mb-2">Price:</label>
      <select
        name="price"
        className="w-full p-2 mb-4 bg-gray-800 text-white"
        onChange={(e) => handleChange(e, "price")}
      >
        <option value="">All</option>
        <option value="low">$0 - $100</option>
        <option value="medium">$100 - $500</option>
        <option value="high">$500+</option>
      </select>

      <label className="block mb-2">Color:</label>
      <div className="mb-4">
        <label className="block">
          <input
            type="checkbox"
            value="black"
            onChange={(e) => handleChange(e, "color")}
            className="mr-2"
          />
          Black
        </label>
        <label className="block">
          <input
            type="checkbox"
            value="white"
            onChange={(e) => handleChange(e, "color")}
            className="mr-2"
          />
          White
        </label>
        <label className="block">
          <input
            type="checkbox"
            value="gray"
            onChange={(e) => handleChange(e, "color")}
            className="mr-2"
          />
          Gray
        </label>
      </div>

      <label className="block mb-2">Size:</label>
      <div>
        <label className="block">
          <input
            type="checkbox"
            value="small"
            onChange={(e) => handleChange(e, "size")}
            className="mr-2"
          />
          Small
        </label>
        <label className="block">
          <input
            type="checkbox"
            value="medium"
            onChange={(e) => handleChange(e, "size")}
            className="mr-2"
          />
          Medium
        </label>
        <label className="block">
          <input
            type="checkbox"
            value="large"
            onChange={(e) => handleChange(e, "size")}
            className="mr-2"
          />
          Large
        </label>
      </div>
    </div>
  );
};

export default Sidebar;*/

import { useState } from "react";

const Sidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    price: "",
    color: [],
    size: [],
  });

  const handleChange = (e, category) => {
    const { value, checked } = e.target;

    // Update the filter state for categories (color, size)
    setFilters((prev) => {
      const updatedCategory = checked
        ? [...prev[category], value]
        : prev[category].filter((item) => item !== value);
      
      return { ...prev, [category]: updatedCategory };
    });

    // Pass the updated filter state to parent
    onFilterChange({ ...filters, [category]: filters[category] });
  };

  return (
    <div className="bg-black text-white p-4 h-screen overflow-y-auto sticky top-0">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      {/* Price Filter */}
      <label className="block mb-2">Price:</label>
      <select
        name="price"
        className="w-full p-2 mb-4 bg-gray-800 text-white"
        onChange={(e) => handleChange(e, "price")}
      >
        <option value="">All</option>
        <option value="low">$0 - $100</option>
        <option value="medium">$100 - $500</option>
        <option value="high">$500+</option>
      </select>

      {/* Color Filter */}
      <label className="block mb-2">Color:</label>
      <div className="mb-4">
        <label className="block">
          <input
            type="checkbox"
            value="black"
            onChange={(e) => handleChange(e, "color")}
            className="mr-2"
          />
          Black
        </label>
        <label className="block">
          <input
            type="checkbox"
            value="white"
            onChange={(e) => handleChange(e, "color")}
            className="mr-2"
          />
          White
        </label>
        <label className="block">
          <input
            type="checkbox"
            value="gray"
            onChange={(e) => handleChange(e, "color")}
            className="mr-2"
          />
          Gray
        </label>
      </div>

      {/* Size Filter */}
      <label className="block mb-2">Size:</label>
      <div>
        <label className="block">
          <input
            type="checkbox"
            value="small"
            onChange={(e) => handleChange(e, "size")}
            className="mr-2"
          />
          Small
        </label>
        <label className="block">
          <input
            type="checkbox"
            value="medium"
            onChange={(e) => handleChange(e, "size")}
            className="mr-2"
          />
          Medium
        </label>
        <label className="block">
          <input
            type="checkbox"
            value="large"
            onChange={(e) => handleChange(e, "size")}
            className="mr-2"
          />
          Large
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
