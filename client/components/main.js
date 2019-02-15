import React, { Component } from 'react';

export default function Main() {
  return (
    <div className="footer-email-list-sign-up">
      <footer>
        <hr className="line-1" />
        <div className="rectangle-199">
          <h1 className="join-list-txt">Join the list</h1>
          <h2 className="signup-heading">SIGN UP FOR THE TLC NEWSLETTER.</h2>
          <form>
            <input className="email-input" type="email" name="email" placeholder="enter email address" />
            <button type="button" className="next-btn">NEXT</button>
            <div className="checkbox-div">
              <input type="checkbox" id="checkbox-1-1" className="regular-checkbox" />
            </div>
          </form>

          <label className="policy-agreement-text">I agree to receive information from Discovery Communications in accordance with the following <span className="privacy-policy-link">Privacy Policy</span></label>
        </div>
        <hr className="line-2" />
      </footer>
    </div>

  );
}
