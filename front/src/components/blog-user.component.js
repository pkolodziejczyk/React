import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class BlogUser extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [], login :"", isMyBlog: false };
    }
    componentDidMount() {
        this.setState({ login: this.props.match.params.login });
        console.log(this.props.match.params.login );
        let login = this.props.match.params.login;
        let url = 'http://localhost:4242/api/postOfUser/'+login;
        console.log(url);
        axios.get(url)
            .then(response => {
                console.log(response.data);
                this.setState({ posts: response.data });
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        if(localStorage.getItem('login')){
            console.log(localStorage.getItem('login') );
            console.log(this.state.login);
            if(localStorage.getItem('login') == login ){
                this.setState({ isMyBlog: true });
            }
        }
    }
    render() {
        return (
            <div>
                <h3>Posts of user {this.state.login }  { String(this.state.isMyBlog ) } </h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <tbody>
                    {this.state.posts.map((post) =>
                        <tr><td>Title : {post.title}</td>
                            <td>{post.content}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}
