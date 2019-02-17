import React, { Component } from 'react';

import css from '../../public/index.css';

import mainHeadingText from '../helperFuncs';
import SubmitionForm from './forms/submitionForm';
import CongratsMessage from './congratsMessage';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      firstName: '',
      lastName: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (event.target.email) {
      this.setState({
        email: event.target.email.value
      });
    }
    if (event.target.firstName && event.target.lastName) {
      this.setState({
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value
      });
    }
  }

  render() {
    //logs user inputs stored in state at final submision
    if (this.state.email && this.state.firstName && this.state.lastName) {
      console.log(this.state);
    }

    return (
      <div className="a">
        <div className="footer-email-list-sign-up">
          <footer>
            <hr className="line-1" />
            <div className="rectangle-199">
              {mainHeadingText(this.state)}
              {this.state.email && this.state.firstName && this.state.lastName ?
                <CongratsMessage /> :
                <SubmitionForm handleSubmit={this.handleSubmit} state={this.state} />
              }
            </div>
            <hr className="line-2" />
          </footer>
        </div>
      </div>
    );
  }
}
