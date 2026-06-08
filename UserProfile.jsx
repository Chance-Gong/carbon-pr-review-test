import React from 'react';
import { Button, TextInput } from '@carbon/react';

// ISSUE: Missing aria-label on icon button
// ISSUE: Not using Carbon spacing tokens
// ISSUE: Hardcoded color values instead of Carbon tokens
const UserProfile = ({ user }) => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
      <h1 style={{ marginBottom: '15px', color: '#161616' }}>User Profile</h1>
      
      {/* ISSUE: Button missing aria-label for icon-only button */}
      <Button 
        kind="ghost" 
        hasIconOnly
        renderIcon={() => <span>×</span>}
        onClick={() => console.log('close')}
      />
      
      {/* ISSUE: Not using proper Carbon form components */}
      <div style={{ marginTop: '10px' }}>
        <label>Name:</label>
        <input type="text" value={user.name} />
      </div>
      
      {/* ISSUE: Using TextInput but missing required props */}
      <TextInput 
        id="email"
        value={user.email}
      />
      
      {/* ISSUE: Inline styles instead of Carbon classes */}
      <div style={{ 
        display: 'flex', 
        gap: '8px',
        marginTop: '16px' 
      }}>
        <Button>Save</Button>
        <Button>Cancel</Button>
      </div>
      
      {/* ISSUE: Not using Carbon Grid system */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div>Column 1</div>
        <div>Column 2</div>
      </div>
    </div>
  );
};

export default UserProfile;

// Made with Bob
