import React, {Component} from 'react';

export default class CreateUser extends Component {

    constructor(props) {
        super(props);

        this.onChangeLogin = this.onChangeLogin.bind(this); // To make sure the connection will make with setState
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePasswordConfirmation = this.onChangePasswordConfirmation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            login: "",
            email: "",
            password: "",
            password_confirmation: "",
            type: false
        }
    }

    onChangeLogin(e) {
        this.setState({
            login: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangePasswordConfirmation(e) {
        this.setState({
            password_confirmation: e.target.value
        });
    }

    onChangePasswordConfirmation(e) {
        this.setState({
            password_confirmation: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault(); // to prevent default submit behaviour

        console.log("Form submitted:");
        console.log('login: ', this.state.login);
        console.log('email: ', this.state.email);
        console.log('password: ', this.state.password);
        console.log('password_confirmation: ', this.state.password_confirmation);
        console.log('type: ', this.state.type);

        this.setState({ // to reinitialyse the form after being submitted
            login: "",
            email: "",
            password: "",
            password_confirmation: "",
            type: false 
        })
    }

    render() {
        return(
            <div style={{marginTop: 20}}>
                <h3>Create new user</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Login: </label>
                        <input  type="text"
                                className="form-control"
                                placeholder="Choose a login"
                                value={this.state.login}
                                onChange={this.onChangeLogin}
                                />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input  type="text"
                                className="form-control"
                                placeholder="Enter your email"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input  type="password"
                                className="form-control"
                                placeholder="Enter your password"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                />
                    </div>
                    <div className="form-group">
                        <label>Password confirmation: </label>
                        <input  type="password"
                                className="form-control"
                                placeholder="Confirm your password"
                                value={this.state.password_confirmation}
                                onChange={this.onChangePasswordConfirmation}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create user" className="btn btn-primary" />
                    </div>
                </form>
                
            </div>
        )
    }
}