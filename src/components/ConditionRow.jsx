// src/components/ConditionRow.jsx
import React, { useState, useEffect } from 'react';
import './ConditionRow.css'; // Import the CSS file

const ConditionRow = ({ index, onConditionChange }) => {
  const [firstDropdown, setFirstDropdown] = useState('');
  const [textBoxValue, setTextBoxValue] = useState('');
  const [secondDropdown, setSecondDropdown] = useState('');

  const parameters1 = ['Name', 'Age', 'Gender', 'Pincode'];
  const parameters2 = ['Name', 'Age', 'Gender', 'Pincode', 'Loan Status'];

  const validateTextBoxValue = () => {
    if (firstDropdown === 'Name') {
      return /^[A-Za-z]+$/.test(textBoxValue);
    } else if (firstDropdown === 'Age') {
      return /^(lesser|greater) than \d+$/.test(textBoxValue);
    } else if (firstDropdown === 'Gender') {
      return ['male', 'female'].includes(textBoxValue.toLowerCase());
    } else if (firstDropdown === 'Pincode') {
      return /^\d{6}$/.test(textBoxValue);
    }
    return true;
  };

  useEffect(() => {
    if (validateTextBoxValue()) {
      onConditionChange(index, { firstDropdown, textBoxValue, secondDropdown });
    }
  }, [firstDropdown, textBoxValue, secondDropdown, index, onConditionChange]);

  const getPlaceholder = () => {
    if (firstDropdown === 'Age') return 'lesser/greater than age';
    if (firstDropdown === 'Gender') return 'male or female';
    if (firstDropdown === 'Pincode') return '6-digit PIN code';
    return '';
  };

  return (
    <div className="condition-row">
      <select value={firstDropdown} onChange={(e) => setFirstDropdown(e.target.value)}>
        <option value="">Select Parameter</option>
        {parameters1.map(param => <option key={param} value={param}>{param}</option>)}
      </select>
      <input
        type="text"
        value={textBoxValue}
        onChange={(e) => setTextBoxValue(e.target.value)}
        placeholder={getPlaceholder()}
      />
      <select value={secondDropdown} onChange={(e) => setSecondDropdown(e.target.value)}>
        <option value="">Select Parameter</option>
        {parameters2.map(param => <option key={param} value={param}>{param}</option>)}
      </select>
    </div>
  );
};

export default ConditionRow;
