import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    NavItem,
    NavLink } from 'reactstrap';
import { logoutUser } from './actions/users';

export const NavUserItem = connect()((props) => (
    <Fragment>
        <div className='navbar-text mr-3'>
            {`Hello, ${props.userInfo.name}`}
        </div>
        <img className='navbar-text mr-3' alt='user avatar' />
        <NavItem>
            <NavLink tag={Link} to='/' onClick={event => props.dispatch(logoutUser())}>Logout</NavLink>
        </NavItem>
    </Fragment>
));