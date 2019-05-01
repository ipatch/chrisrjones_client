import React, { Component } from 'react';

class Auth extends Component {
  // manage form state using react
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'me@chrisrjones.com'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: ''
        },
        value: '',
        validation: {
          required: true, 
          minLength: 7
        },
        valid: false,
        touched: false
      }
    }
  }

  render() {
    const formElementsArray = [];
    for(let key in this.state.loginForm) {
      formElementsArray.push({
        id: key,
        config: this.state.loginForm[key]
      });
    }

    return (
      <div>
        <form>
          {form}
          <Button />
        </form>
      </div>
    );
  }
}

export default Auth;
