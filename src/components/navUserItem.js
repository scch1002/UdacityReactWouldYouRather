import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    NavItem,
    NavLink } from 'reactstrap';
import { logoutUser } from '../actions/users';

export const NavUserItem = connect()((props) => (
    <Fragment>
        <div className='navbar-text mr-3'>
            {`Hello, ${props.userInfo.name}`}
        </div>
        <div className='navbar-brand mr-3'>
            <img width='20px' height='20px' src={props.userInfo.avatarURL} alt='user avatar' />
        </div>
        <NavItem>
            <NavLink tag={Link} to='/' onClick={event => props.dispatch(logoutUser())}>Logout</NavLink>
        </NavItem>
    </Fragment>
));