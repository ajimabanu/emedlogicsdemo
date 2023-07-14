import React, { useState } from 'react';
import "../styles/Year.css";



const Year = () => {
  const years = Array.from({ length: 9 }, (_, index) => 2024 - index);
  const [selectedYear, setSelectedYear] = useState('Year');
  const [optionsOpen, setOptionsOpen] = useState(false);

  const handleSelect = (year) => {
    setSelectedYear(year);
    setOptionsOpen(false);
  };

  return (
    <div id="app-cover">
      <div
        id="select-box"
        onMouseEnter={() => setOptionsOpen(true)}
        onMouseLeave={() => setOptionsOpen(false)}
      >
        <input
          type="checkbox"
          id="options-view-button"
          checked={optionsOpen}
          onChange={() => setOptionsOpen(!optionsOpen)}
        />
        <div id="select-button" className="brd">
          <div id="selected-value">
            <span>{selectedYear}</span>
          </div>
          <div id="chevrons">
            <i className="fas fa-chevron-up"></i>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
        <div id="options" className={optionsOpen ? 'open' : ''}>
          {years.map((year) => (
            <div key={year} className="option" onClick={() => handleSelect(year)}>
              <input className="s-c top" type="radio" name="platform" value={year} />
              <input className="s-c bottom" type="radio" name="platform" value={year} />
              <span className="label">{year}</span>
              <span className="opt-val">{year}</span>
            </div>
          ))}
          <div id="option-bg"></div>
        </div>
      </div>
    </div>
  );
};

export default Year;
