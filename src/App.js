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
  NavLink,
  Container,
  Row,
  Col } from 'reactstrap';
import QuestionDashboard from './components/questionDashboard';
import './App.css';
import NewQuestion from './components/newQuestion';
import LeaderBoard from './components/leaderBoard';
import Login from './components/login';
import QuestionDetail from './components/questionDetail';
import { retrieveUsers } from './actions/users';
import { retrieveQuestions } from './actions/questions';
import { AppNavigation } from './appNavigation';

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
              <AppNavigation />
              <Container className="App-Container-Margin">
                <Row>
                  <Col sm="12" md={{ size: 10, offset: 1 }}>
                    {( this.props.loginUser !== null ? 
                      (
                      <Fragment>
                        <Route exact path='/' component={QuestionDashboard}>
                        </Route>
                        <Route path='/add' component={NewQuestion}>
                        </Route>
                        <Route path='/leaderboard' component={LeaderBoard}>
                        </Route>
                        <Route path='/questions/:question_id' component={QuestionDetail}>
                        </Route>
                      </Fragment>
                      ) : this.props.initialDataLoad ?
                      (<Login></Login>)  
                      : 'Loading'
                      )}
                  </Col>
                </Row>
            </Container>
            </Fragment>
          </BrowserRouter>
      </div>
    );
  }
}

export default connect(({ users, questions, loginUser }) => ({ 
  initialDataLoad: users !== undefined && questions !== undefined,
  loginUser }))
(App);
