import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import {
  Container,
  Row,
  Col } from 'reactstrap';
import LoadingScreen from 'react-loading-screen';
import LoadingBar from 'react-redux-loading-bar';
import StickyFooter from 'react-sticky-footer';
import QuestionDashboard from './questionDashboard';
import './App.css';
import logo from '../logo.svg';
import NewQuestion from './newQuestion';
import LeaderBoard from './leaderBoard';
import Login from './login';
import QuestionDetail from './questionDetail';
import { handleInitialData } from '../actions/shared';
import { AppNavigation } from './appNavigation';

class App extends Component {
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
                <Container className="mt-3 mb-3">
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
                <StickyFooter
                    bottomThreshold={50}
                    normalStyles={{
                    backgroundColor: "#f8f9fa",
                    padding: "2rem",
                    width: '100%',
                    }}
                    stickyStyles={{
                    backgroundColor: "#f8f9fa",
                    padding: "2rem",
                    width: '100%',
                    }}
                >
                    <div>Icons made by {' '} <a href="http://www.freepik.com" title="Freepik">Freepik</a> 
                      {' '} from {' '}
                      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> {' '}
                      is licensed by {' '}
                      <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a>
                    </div>
                </StickyFooter>
              </Fragment>
            </BrowserRouter>
          </LoadingScreen>
      </div>
    );
  }
}

export default connect(({ loginUser, appLoading }) => ({ loginUser, appLoading }))(App);
