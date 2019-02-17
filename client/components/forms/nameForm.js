import React from 'react';

export default function NameForm() {
  return (
    <div>
      <input className="input first-name-input" type="text" name="firstName" placeholder="First Name" required />
      <input className="input last-name-input" type="text" name="lastName" placeholder="Last Name" required />
    </div>
  );
}
