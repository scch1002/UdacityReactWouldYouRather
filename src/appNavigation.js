import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col } from 'reactstrap';
import { NavUserItem } from './navUserItem';

export const AppNavigation = connect(({ loginUser, users }) => ({ loginUser, users }))((props) => (
    <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to='/'>Would You Rather?</NavbarBrand>
        <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink tag={Link} to='/'>Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to='/add'>New Question</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to='/leaderboard'>Leader Board</NavLink>
            </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
            {props.loginUser !== null &&
                (
                    <NavUserItem userInfo={props.users[props.loginUser]} />
                )}
        </Nav>
    </Navbar>
));