import React, { Component } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './LoginForm.scss';

class LoginForm extends Component {
   state = {
      login: '',
      password: '',
      formErrors: {
         login: '',
         password: ''
      },
      loginValid: false,
      passwordValid: false,
      formValid: false
   }
   handleChangeInputs = e => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
         [name]: value
      }, () => {
         this.validationFields(name, value)
      })
   }
   validationFields = (fieldName, value) => {
      let fieldValidationErrors = this.state.formErrors;
      let loginValid = this.state.loginValid;
      let passwordValid = this.state.passwordValid;
      switch (fieldName) {
         case 'login':
            loginValid = /^[0-9]/.test(value);
            fieldValidationErrors.login = loginValid ? 'Please enter a valid login' : '';
            break;
         case 'password':
            passwordValid = value.length <= 6;
            fieldValidationErrors.password = passwordValid ? 'Please enter a valid password' : '';
            break;
         default:
            break;
      }
      this.setState({
         formErrors: fieldValidationErrors,
         loginValid: loginValid,
         passwordValid: passwordValid,
      }, () => {
         this.validateForm()
      })
   }
   validateForm = () => {
      this.setState({
         formValid: this.state.loginValid || this.state.passwordValid
      })
   }
   handleSubmit = () => {
      if (!this.state.formValid && this.state.login.length !== 0 && this.state.password.length !== 0) {
         alert(JSON.stringify({
            login: this.state.login,
            password: this.state.password
         }, null, 4))
         this.setState({
            login: '',
            password: '',
            formErrors: {
               login: '',
               password: ''
            },
            loginValid: false,
            passwordValid: false,
            formValid: false
         })
      }
   }
   render() {
      const { login, password, loginValid, passwordValid, formErrors } = this.state;
      return (
         <div className="login-form">
            <h4 className="login-form__title">
               Вход в аккаунт
            </h4>
            <div className={`login-form__item ${loginValid ? '_error' : ''}`} >
               <Input
                  type="text"
                  classes="login-form__input"
                  name="login"
                  placeholder="Login"
                  valueInput={login}
                  handleChangeInput={this.handleChangeInputs}
               />
               {
                  loginValid ? (
                     <div className="error__msg">{formErrors.login}</div>
                  ) : null
               }
            </div>
            <div className={`login-form__item ${passwordValid ? '_error' : ''}`}>
               <Input
                  type="password"
                  classes="login-form__input"
                  name="password"
                  placeholder="Password"
                  valueInput={password}
                  handleChangeInput={this.handleChangeInputs}
               />
               {
                  passwordValid ? (
                     <div className="error__msg">{formErrors.password}</div>
                  ) : null
               }
            </div>
            <Button
               classes="login-form__btn"
               content="Войти"
               handleClick={this.handleSubmit}
            />
         </div>
      );
   }

}

export default LoginForm;