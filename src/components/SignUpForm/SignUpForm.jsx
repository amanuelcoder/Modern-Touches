import { Component } from 'react';
import './SignUpForm.css';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {name, email, password} = this.state;
      const formData = {name, email, password};
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className="box">
            <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="inputBox">
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Name</label>
            </div>
            <div className="inputBox">
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Email</label>
            </div>
            <div className="inputBox">
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label>Password</label>
            </div>
            <div className="inputBox">
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <label>Confirm</label>
            </div>
           <button className="Log"type="submit" disabled={disable}>SIGN UP</button>
          </form>
          <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
       
    );
  }
}