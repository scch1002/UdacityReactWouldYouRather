import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    NavItem,
    NavLink } from 'reactstrap';
import './navUserItem.css';
import { logoutUser } from './actions/users';

export const NavUserItem = connect()((props) => (
    <Fragment>
        <div className='navbar-text navUserItem-Spacing'>
            {`Hello, ${props.userInfo.name}`}
        </div>
        <img className='navbar-text navUserItem-Spacing' alt='user avatar' />
        <NavItem>
            <NavLink tag={Link} to='/' onClick={event => props.dispatch(logoutUser())}>Logout</NavLink>
        </NavItem>
    </Fragment>
));