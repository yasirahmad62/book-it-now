import React, { useState } from 'react';
import './FilterComponent.css';

const FilterComponent = ({ filterName, filterValues, onFilterChange }) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleFilterSelect = (filter) => {
    onFilterChange(filterName, filter); // Updated to pass filterName and filter value immediately
    setSelectedFilter(filter);

  };

  return (
    <div className="filter-container">
      <div className="filter-header" onClick={handleExpand}>
        <span>{filterName}</span>
        <button 
          className="clear-btn" 
          onClick={(e) => {
            e.stopPropagation(); 
            handleFilterSelect("");
          }}
        >
          Clear
        </button>
      </div>
      {expanded && (
        <div className="filter-options">
          {filterValues.map((value) => (
            <div
              key={value}
              className={`filter-option ${selectedFilter === value ? 'selected' : ''}`}
              onClick={() => handleFilterSelect(value)}
            >
              {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
