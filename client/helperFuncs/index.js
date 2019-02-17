import React from 'react';

export default function mainHeadingText(state) {
  return state.email && state.firstName && state.lastName ?
    <h1 className="congrats-txt main-heading-txt">congratulations!</h1> :
    <h1 className="main-heading-txt">Join the list</h1>;
}
