import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { browserHistory } from 'react-router';
import './form.css';
import axios from 'axios';

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isLogged: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // const header = { 'Content-Type': 'application/x-www-form-urlencoded'};
    const credentials = {
      // headers: header ,
      type: 'login',
      email: this.state.email,
      password: this.state.password
    };
    const email = this.state.email;
    const password = this.state.password;

    axios
      .get(
        'http://10.1.2.113:8080/BikeShop/connect?type=login&email=' +
          this.state.email +
          '&password=' +
          this.state.password
      )
      .then(response => {
        this.setState({
          isLogged: true
        });
        console.log(response.data.authorization);
        if (response.data.authorization) {
          localStorage.setItem('isLoggedIn', true);
          alert('Logged In');
          this.props.history.push('/');
        } else {
          alert('Invalid Credentials');
        }
      });

    console.log('The form was submitted with the following data:');
    console.log(this.state);
  }

  render() {
    return (
      <div className='App1'>
        {/* <div className="App__Aside"></div> */}
        <div className='App__Container'>
          <div className='App__Form'>
            <div className='PageSwitcher'>
              <NavLink
                to='/sign-in'
                activeClassName='PageSwitcher__Item--Active'
                className='PageSwitcher__Item'
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to='/sign-up'
                activeClassName='PageSwitcher__Item--Active'
                className='PageSwitcher__Item'
              >
                Sign Up
              </NavLink>
            </div>

            <div className='FormTitle'>
              <NavLink
                to='/sign-in'
                activeClassName='FormTitle__Link--Active'
                className='FormTitle__Link'
              >
                Sign In
              </NavLink>{' '}
              or{' '}
              <NavLink
                exact
                to='/'
                activeClassName='FormTitle__Link--Active'
                className='FormTitle__Link'
              >
                Sign Up
              </NavLink>
            </div>
            <div className='FormCenter'>
              <form
                onSubmit={this.handleSubmit}
                className='FormFields'
                onSubmit={this.handleSubmit}
              >
                <div className='FormField'>
                  <label className='FormField__Label' htmlFor='email'>
                    E-Mail Address
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='FormField__Input'
                    placeholder='Enter your email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>

                <div className='FormField'>
                  <label className='FormField__Label' htmlFor='password'>
                    Password
                  </label>
                  <input
                    type='password'
                    id='password'
                    className='FormField__Input'
                    placeholder='Enter your password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>

                <div className='FormField'>
                  <button className='FormField__Button mr-20'>Sign In</button>{' '}
                  <Link to='/sign-up' className='FormField__Link'>
                    Create an account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInForm;
