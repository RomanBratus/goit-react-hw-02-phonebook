import React from 'react';
import PropTypes from 'prop-types';
import './Finder.css'

const Finder = ({ filter, onChange }) => {
  return (
    <div className="finder-container">
      <label className="finder-label">Find contact by name</label>
      <input
        className="finder-input"
        type='text'
        value={filter}
        onChange={onChange}
      />
    </div>
  );
};

Finder.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Finder;
