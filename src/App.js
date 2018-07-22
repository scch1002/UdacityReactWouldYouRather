import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import QuestionDashboard from './components/questionDashboard';
import './App.css';
import { NewQuestion } from './components/newQuestion';
import { LeaderBoard } from './components/leaderBoard';
import Login from './components/login';
import { retrieveUsers } from './actions/users';
import { retrieveQuestions } from './actions/questions';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
      this.props.dispatch(retrieveUsers());
      this.props.dispatch(retrieveQuestions());
  }  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <Navbar color="light" light expand="md">
              <NavbarBrand tag={Link} to='/'>reactstrap</NavbarBrand>
                <Nav className="ml-auto" navbar>
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
              </Navbar>
              {( this.props.loginUser !== undefined ? 
                (
                <Fragment>
                  <Route exact path='/' render={() => (
                      <QuestionDashboard />
                  )}>
                  </Route>
                  <Route path='/add' render={() => (
                      <NewQuestion />
                  )}>
                  </Route>
                  <Route path='/leaderboard' render={() => (
                      <LeaderBoard />
                  )}>
                  </Route>
                </Fragment>
                ) : this.props.initialDataLoad ?
                (<Login></Login>)  
                : 'Loading'
                )}
            </Fragment>
          </BrowserRouter>
      </div>
    );
  }

}

export default connect(({ userState, questionState }) => ({ 
  initialDataLoad: userState.availableUsers !== undefined && questionState.questions !== undefined,
  loginUser: userState.loginUser }))
(App);
