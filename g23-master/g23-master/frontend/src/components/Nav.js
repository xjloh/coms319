import React from 'react';
import { connect } from 'react-redux';
import {logout} from '../actions/account';
import {Link} from 'react-router-dom';

class Nav extends React.Component {
    logout=()=>{
        this.props.logout();
    }

    render() {
        return (
            <ul className="sidenav">
                <li><a onClick={this.logout}>Log out</a></li>
                <li><Link to="/">Home</Link></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
            </ul>
        );
    }
}
export default connect(
    null,
    {logout}
)(Nav);