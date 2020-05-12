import React, {Component} from 'react';
import axios from "axios";

export default class LoginUser extends Component {

    constructor(props) {
        super(props);

        this.onChangeLogin = this.onChangeLogin.bind(this); // To make sure the connection will make with setState
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        let login = "";
        if(localStorage.getItem('login')) {
            login = localStorage.getItem('login');
        }
        this.state = {

            login: login,
            password: "",
        }
    }

    onChangeLogin(e) {
        this.setState({
            login: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault(); // to prevent default submit behaviour

        console.log("Form submitted:");
        console.log('login: ', this.state.login);
        console.log('password: ', this.state.password);

        const user = {
            login: this.state.login,
            password: this.state.password
        };

        axios.post('http://localhost:4242/api/login', user)
            .then(res => {
                if(res.data.status == 'ok') {
                    console.log('youpi');
                    localStorage.setItem('login', this.state.login);
                    this.setState({ // to reinitialyse the form after being submitted
                        login: "",
                        password: ""
                    })
                    this.setState({ // to reinitialyse the form after being submitted
                        login: localStorage.getItem('login'),
                        password: ""
                    });
                }else{
                    console.log('Fail lllledzrgtrh');
                }
            });


    }

    render() {
        return(
            <div style={{marginTop: 20}}>
                <h3>Login</h3>
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
                        <label>Password: </label>
                        <input  type="password"
                                className="form-control"
                                placeholder="Enter your password"
                                value={this.state.password}
                                onChange={this.onChangePassword}
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