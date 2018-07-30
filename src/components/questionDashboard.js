import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { QuestionListItem } from './questionListItem';

class QuestionDashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Unanswered Questions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Answered Questions
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
                <Col sm="12">
                {
                this.props.questions
                  .filter(f => this.props.loginUser.answers[f.id] === undefined)
                  .sort((s1, s2) => s2.timestamp - s1.timestamp)
                  .map(m => (<QuestionListItem question={m}></QuestionListItem>))
                }
                </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
                <Col sm="12">
                {
                this.props.questions
                  .filter(f => this.props.loginUser.answers[f.id] !== undefined)
                  .sort((s1, s2) => s2.timestamp - s1.timestamp)
                  .map(m => (<QuestionListItem question={m}></QuestionListItem>))
                }
                </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Fragment>
    );
  }
}

export default connect(({ loginUser, users, questions }) => ({ loginUser: users[loginUser], questions: Object.values(questions) }))
  (QuestionDashboard);