import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }
    componentDidMount() {
        axios.get('http://localhost:4242/api/users')
            .then(response => {
                this.setState({ users: response.data });
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    /*
    UserList() {
        return this.state.users.map(function (currentUser, i) {
            return <UserList users={currentUser} key={i} />;
        })
    */
    render() {
        return (
            <div>
                <h3>Users List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                    <tr>
                        <th>login</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map((user) =>
                        <tr>
                            <td> {user.login}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}
