import React from 'react';
import { Button } from '@carbon/react';
import { Close, Add, Edit } from '@carbon/icons-react';

// ISSUE: Icon buttons missing aria-labels
// ISSUE: Incorrect icon sizing
// ISSUE: Not following Carbon accessibility guidelines
const IconButtons = () => {
  return (
    <div>
      {/* ISSUE: Icon-only button without aria-label */}
      <Button 
        kind="ghost" 
        hasIconOnly
        renderIcon={Close}
        onClick={() => console.log('close')}
      />
      
      {/* ISSUE: Icon button with text but hasIconOnly is true */}
      <Button 
        kind="primary"
        hasIconOnly
        renderIcon={Add}
      >
        Add Item
      </Button>
      
      {/* ISSUE: Using wrong icon size prop */}
      <Button 
        renderIcon={Edit}
        iconSize={32}
      >
        Edit
      </Button>
      
      {/* ISSUE: Custom icon without proper accessibility */}
      <Button onClick={() => {}}>
        <svg width="16" height="16">
          <circle cx="8" cy="8" r="8" fill="currentColor" />
        </svg>
      </Button>
      
      {/* ISSUE: Disabled button without explanation */}
      <Button 
        disabled
        renderIcon={Close}
      >
        Delete
      </Button>
      
      {/* ISSUE: Button with onClick but no keyboard handler */}
      <div 
        onClick={() => console.log('clicked')}
        style={{ cursor: 'pointer' }}
      >
        <Close size={16} />
      </div>
    </div>
  );
};

export default IconButtons;

// Made with Bob
