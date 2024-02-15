import React, { useState } from 'react';

export default function Form() {
  // Define state variables for firstName and lastName
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Event handler to update firstName state
  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  // Event handler to update lastName state
  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  // Event handler to reset firstName and lastName state
  function handleReset() {
    setFirstName('');
    setLastName('');
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
