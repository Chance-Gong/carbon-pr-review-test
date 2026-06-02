import React, { useState } from 'react';

// TODO: Add proper error handling
const UserProfile = ({ userId }) => {
  const [data, setData] = useState(null);
  const API_KEY = "sk-1234567890abcdef"; // Hardcoded API key - security issue
  
  // Magic number without explanation
  const MAX_RETRIES = 3;
  
  const fetchUserData = async () => {
    // No error handling
    const response = await fetch(`https://api.example.com/users/${userId}`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    });
    const result = await response.json();
    setData(result);
  };
  
  // Function is too long and does multiple things
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    
    // No input validation
    if(name && email) {
      // Inconsistent formatting
      console.log("Submitting data...");
      fetch('https://api.example.com/update', {
        method: 'POST',
        body: JSON.stringify({name,email,phone}),
        headers: {'Content-Type': 'application/json'}
      }).then(res=>res.json()).then(data=>{
        console.log(data);
        alert('Success!');
      });
    }
  };
  
  // Variable name is not descriptive
  const x = data?.name || 'Unknown';
  
  return (
    <div className="user-profile">
      <h1>{x}</h1>
      <button onClick={fetchUserData}>Load Data</button>
      <form onSubmit={handleSubmit}>
        <input name="name" />
        <input name="email" />
        <input name="phone" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserProfile;

// Made with Bob
