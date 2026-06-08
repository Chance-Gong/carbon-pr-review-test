import React, { useState } from 'react';
import { TextInput, Button, Form, Stack } from '@carbon/react';

// ISSUE: Form accessibility issues
// ISSUE: Missing required Carbon form patterns
// ISSUE: Incorrect validation handling
const FormComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <Form>
      {/* ISSUE: TextInput missing labelText (required prop) */}
      <TextInput 
        id="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      {/* ISSUE: Password field without proper type */}
      <TextInput 
        id="password"
        labelText="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      {/* ISSUE: Missing form validation feedback */}
      <TextInput 
        id="username"
        labelText="Username"
        invalid={true}
      />
      
      {/* ISSUE: Not using Carbon's Stack component properly */}
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <Button type="submit">Submit</Button>
        <Button kind="secondary">Cancel</Button>
      </div>
      
      {/* ISSUE: Form without onSubmit handler */}
      {/* ISSUE: No error handling or loading states */}
      
      {/* ISSUE: Using native HTML form elements instead of Carbon */}
      <div>
        <label htmlFor="phone">Phone:</label>
        <input 
          type="tel" 
          id="phone"
          style={{ padding: '8px', border: '1px solid #ccc' }}
        />
      </div>
      
      {/* ISSUE: Checkbox without proper Carbon component */}
      <div>
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">I agree to terms</label>
      </div>
      
      {/* ISSUE: Select without using Carbon Dropdown */}
      <select>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    </Form>
  );
};

export default FormComponent;

// Made with Bob
