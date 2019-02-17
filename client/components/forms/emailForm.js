import React from 'react';

export default function EmailForm() {
  return (
    <div>
      <input className="input email-input" type="email" name="email" placeholder="enter email address" required />
      <div className="checkbox-div">
        <input type="checkbox" id="checkbox-1-1" className="regular-checkbox" required />
      </div>
      <label className="policy-agreement-text">I agree to receive information from Discovery Communications in accordance with the following <span className="privacy-policy-link">Privacy Policy</span></label>
    </div>
  );
}
