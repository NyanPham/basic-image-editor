import React from 'react';

const ToolbarItem = ({optionName, isActive, handleToolbarItemClick, index}) => {
  return (
      <button 
            className={`toolbar-item${isActive? ' active' : ''}`} 
            onClick={handleToolbarItemClick}
        >           
          {optionName}
      </button>
  )
};

export default ToolbarItem;
