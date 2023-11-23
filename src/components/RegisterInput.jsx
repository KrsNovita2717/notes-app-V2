import React from 'react';
import PropTypes from 'prop-types';

class RegisterInput extends React.Component {
  constructor(props) {
    super(props)
 
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
      passwordMatchError: '',
    }
 
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
 
  onNameChange(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }
 
  onEmailChange(event) {
    this.setState(() => {
      return {
        email: event.target.value
      };
    });
  }
 
  onPasswordChange(event) {
    this.setState(() => {
      return {
        password: event.target.value
      };
    })
  }

  onConfirmPasswordChange(event) {
    this.setState(() => {
      return {
        confirmPassword: event.target.value
      };
    })
  }
 
  onSubmitHandler(event) {
    event.preventDefault();
 
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ passwordMatchError: 'Password tidak cocok' });
      return;
    }

    this.setState({ passwordMatchError: '' });
    
    this.props.register({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });
  }
 
  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className='input-register'>
        <label htmlFor="name">Name</label>
        <input type="text" value={this.state.name} onChange={this.onNameChange} />
        <label htmlFor="email">Email</label>
        <input type="email" value={this.state.email} onChange={this.onEmailChange} />
        <label htmlFor="password">Password</label>
        <input type="password" autoComplete='current-password' minLength='6' value={this.state.password} onChange={this.onPasswordChange} />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" value={this.state.confirmPassword} onChange={this.onConfirmPasswordChange} />
        {this.state.passwordMatchError && (
          <p style={{ color: 'red' }}>{this.state.passwordMatchError}</p>
        )}
        <button>Register</button>
      </form>
    )
  }
}
 
RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
 
export default RegisterInput;