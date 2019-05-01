import React, { Component } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

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

    const form = formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) => this.inputChangedHandler(event, formElement.id)} />

    ));

    return (
      <div>
        <form>
          {form}
          <Button btnType="Success">Login</Button>
        </form>
      </div>
    );
  }
}

export default Auth;
