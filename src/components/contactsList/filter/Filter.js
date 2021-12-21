import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <label className={styles.filter}>
        Find contacts by name
        <input type="text" value={value} onChange={onChange}></input>
      </label>
    </>
  );
};

Filter.prototype = {
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
