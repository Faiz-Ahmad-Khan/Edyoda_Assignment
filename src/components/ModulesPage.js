import React, { useState } from 'react';

const ModulesPage = () => {
  const [activeItem, setActiveItem] = useState('Topic');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="modules-page">
      <div className="left-bar">
        <div
          className={`item ${activeItem === 'Topic' ? 'active' : ''}`}
          onClick={() => handleItemClick('Topic')}
        >
          <i className="fas fa-book"></i>
          <span>Topic</span>
        </div>
        <div
          className={`item ${activeItem === 'Quiz' ? 'active' : ''}`}
          onClick={() => handleItemClick('Quiz')}
        >
          <i className="fas fa-question"></i>
          <span>Quiz</span>
        </div>
        <div
          className={`item ${activeItem === 'Assignment' ? 'active' : ''}`}
          onClick={() => handleItemClick('Assignment')}
        >
          <i className="fas fa-file-alt"></i>
          <span>Assignment</span>
        </div>
      </div>
      <div className="right-content">
        {activeItem === 'Topic' && (
          <div className="topic-content">
            <h2>Topic Content</h2>
            <p>This is the content for the Topic module.</p>
          </div>
        )}
        {activeItem === 'Quiz' && (
          <div className="quiz-content">
            <h2>Quiz Content</h2>
            <p>This is the content for the Quiz module.</p>
          </div>
        )}
        {activeItem === 'Assignment' && (
          <div className="assignment-content">
            <h2>Assignment Content</h2>
            <p>This is the content for the Assignment module.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModulesPage;