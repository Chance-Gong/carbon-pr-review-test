import React from 'react';
import { Grid, Column } from '@carbon/react';

// ISSUE: Not using Carbon Grid system correctly
// ISSUE: Hardcoded spacing instead of Carbon tokens
// ISSUE: Incorrect responsive breakpoints
const LayoutComponent = () => {
  return (
    <div>
      {/* ISSUE: Using custom grid instead of Carbon Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        padding: '30px'
      }}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </div>
      
      {/* ISSUE: Incorrect Grid usage - missing proper span props */}
      <Grid>
        <Column>
          <div>Full width column</div>
        </Column>
      </Grid>
      
      {/* ISSUE: Not using Carbon spacing tokens */}
      <div style={{ 
        marginTop: '25px',
        marginBottom: '18px',
        paddingLeft: '22px',
        paddingRight: '22px'
      }}>
        <h2 style={{ marginBottom: '12px' }}>Section Title</h2>
        <p style={{ lineHeight: '1.6' }}>Content here</p>
      </div>
      
      {/* ISSUE: Hardcoded breakpoints instead of Carbon breakpoints */}
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: window.innerWidth < 768 ? 'column' : 'row'
        }}>
          <div style={{ flex: 1 }}>Left</div>
          <div style={{ flex: 1 }}>Right</div>
        </div>
      </div>
      
      {/* ISSUE: Using px values instead of rem/Carbon tokens */}
      <div style={{
        fontSize: '14px',
        fontWeight: 600,
        color: '#161616',
        backgroundColor: '#f4f4f4',
        border: '1px solid #e0e0e0',
        borderRadius: '4px',
        padding: '16px 24px'
      }}>
        Card content
      </div>
      
      {/* ISSUE: Not using Carbon's Tile component */}
      <div className="custom-tile" style={{
        background: 'white',
        padding: '1rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        Should use Carbon Tile
      </div>
    </div>
  );
};

export default LayoutComponent;

// Made with Bob
