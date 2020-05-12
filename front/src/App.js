import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; // Gotten from npm install react-router-dom
import "bootstrap/dist/css/bootstrap.min.css"; // Gotten from npm install bootstrap

import ListUser from "./components/user-list.component";
import UpdateUser from "./components/user-update.component";
import CreateUser from "./components/user-create.component";
import LoginUser from "./components/user-login.component";

function App() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link to="/" className="navbar-brand">Home</Link>
                    <Link to="/" className="nav-link" >List user</Link>
                    <Link to="/create" className="nav-link" >Create user</Link>
                    <Link to="/login" className="nav-link" >Login</Link>
                </nav>
                <Route path="/" exact component={ListUser} />
                <Route path="/create" component={CreateUser} />
                <Route path="/login" component={LoginUser} />
            </div>
        </Router>
    );
}

export default App;