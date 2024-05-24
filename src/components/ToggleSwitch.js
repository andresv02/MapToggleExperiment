import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faList } from '@fortawesome/free-solid-svg-icons';
import './ToggleSwitch.css';

const ToggleSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="toggle-switch">
      <input 
        type="checkbox" 
        className="checkbox" 
        id="toggle" 
        checked={checked} 
        onChange={handleChange} 
      />
      <label className="label" htmlFor="toggle">
        <span className={`inner ${checked ? 'checked' : ''}`}>
          <span className="text">{checked ? 'List' : 'Map'}</span>
        </span>
        <span className="switch">
          {checked ? (
            <FontAwesomeIcon icon={faList} style={{ color: '#2859FF' }} />
          ) : (
            <FontAwesomeIcon icon={faMap} style={{ color: '#17b03b' }} />
          )}
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitch;