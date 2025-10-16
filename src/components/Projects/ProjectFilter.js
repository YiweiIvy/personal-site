import React from 'react';
import PropTypes from 'prop-types';

const ProjectFilter = ({ categories, selectedCategory, onCategoryChange }) => (
  <div className="project-filters">
    <div className="filter-section">
      <h4>Filter by Category</h4>
      <div className="filter-buttons">
        <button
          type="button"
          className={`filter-btn ${selectedCategory === 'All' ? 'active' : ''}`}
          onClick={() => onCategoryChange('All')}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={`filter-btn ${
              selectedCategory === category ? 'active' : ''
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  </div>
);

ProjectFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default ProjectFilter;
