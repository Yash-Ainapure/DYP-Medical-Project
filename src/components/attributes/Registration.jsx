import React, { Component } from 'react';
import "./login.css"


class Register extends Component {
  signup = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword( email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User registered:', user);
        alert('Registration successful! You can now sign in.');
        window.location.href = 'http://localhost:5173/'; 
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          alert('A user with this email address already exists. Please sign in instead.');
          window.location.href = 'http://localhost:5173/';
        } else if (error.code === 'auth/weak-password') {
          alert('Invalid password. Please enter a stronger password.');
          document.getElementById('password').value = ''; 
        } else {
          console.error('Registration error:', error);
        }
      });
  };

  render() {
    return (
      <div>
        <div id="login-form-wrap">
          <h2>Registration</h2>
          <form
            id="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              this.signup();
            }}
          >
            <p>
              <input  className='input1' type="text" id="username" placeholder="Enter your full name" required />
              <i className="validation">
                <span></span>
                <span></span>
              </i>
            </p>
            <p>
              <input className='input1' type="email" id="email" placeholder="Email Address" required />
              <i className="validation">
                <span></span>
                <span></span>
              </i>
            </p>
            <p>
              <input className='input1' type="password" id="password" placeholder="Enter password" required />
              <i className="validation">
                <span></span>
                <span></span>
              </i>
            </p>
            <p>
              <input  className='input1' type="submit" id="register" value="Register" />
            </p>
          </form>
          <div id="create-account-wrap">
            <p>Already a member? <a href="http://localhost:5173/">Sign in</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;