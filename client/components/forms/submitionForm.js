import React from 'react';
import { action } from '@storybook/addon-actions';

import EmailForm from './emailForm';
import NameForm from './nameForm';

export default function SubmitionForm(props) {
  return (
    <div>
      {!props.state.email ?
        <h2 className="signup-heading">SIGN UP FOR <span>THE TLC NEWSLETTER.</span></h2> :
        <h2 className="signup-heading">ALMOST DONE! PLEASE ENTER YOUR FIRST AND LAST NAME.</h2>
      }
      <form onSubmit={(event) => { props.handleSubmit(event) }}>
        {!props.state.email ?
          <EmailForm handleSubmit={props.handleSubmit} /> :
          <NameForm handleSubmit={props.handleSubmit} />
        }
        <button onClick={action('clicked')} type="submit" className="next-btn">NEXT</button>
      </form>
    </div>
  );
}
