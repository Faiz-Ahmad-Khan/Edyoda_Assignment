import React, { useState } from 'react';

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="homepage">
      <div className="dropdown">
        <button className="dropdown-btn" onClick={toggleDropdown}>
          Homepage Dropdown
        </button>
        {isOpen && (
          <div className="dropdown-options">
            <div
              className={`option ${selectedOption === 'Option 1' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Option 1')}
            >
              Option 1
            </div>
            <div
              className={`option ${selectedOption === 'Option 2' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Option 2')}
            >
              Option 2
            </div>
            <div
              className={`option ${selectedOption === 'Option 3' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Option 3')}
            >
              Option 3
            </div>
          </div>
        )}
      </div>
      <div className="blue-bar">{selectedOption ? selectedOption : 'Data Scientist Program'}</div>
      <div className="homepage-content">
        <p>This is the homepage content.</p>
      </div>
    </div>
  );
};

export default Homepage;