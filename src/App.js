import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import {
  Container,
  Row,
  Col } from 'reactstrap';
import LoadingScreen from 'react-loading-screen';
import LoadingBar from 'react-redux-loading-bar';
import QuestionDashboard from './components/questionDashboard';
import './App.css';
import logo from './logo.svg';
import NewQuestion from './components/newQuestion';
import LeaderBoard from './components/leaderBoard';
import Login from './components/login';
import QuestionDetail from './components/questionDetail';
import { handleInitialData } from './actions/shared';
import { AppNavigation } from './appNavigation';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }  
  render() {
    return (
      <div className="App">
        <LoadingScreen
            loading={this.props.appLoading}
            bgColor='#f1f1f1'
            spinnerColor='#9ee5f8'
            textColor='#676767'
            logoSrc={logo}
            text='Would You Rather?'
          >
          <BrowserRouter>
            <Fragment>
                <AppNavigation />
                <LoadingBar className='App-LoadingBar' />
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
                        ) : 
                        (<Login></Login>)
                      )}
                    </Col>
                  </Row>
              </Container>
              </Fragment>
            </BrowserRouter>
          </LoadingScreen>
      </div>
    );
  }
}

export default connect(({ loginUser, appLoading }) => ({ loginUser, appLoading }))
(App);
