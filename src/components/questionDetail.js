import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody,
    CardTitle, Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';
import QuestionPoll from './questionPoll';
import QuestionResult from './questionResult';

class QuestionDetails extends Component {
    render() {
        let question = this.props.questions.find(f => f.id === this.props.match.params.question_id);
        let author = this.props.availableUsers.find(f => f.id === question.author);
        let questionAnswer = this.props.loginUser.answers[this.props.match.params.question_id];

        if (questionAnswer === undefined) {
            return (
                <QuestionPoll />
            );
        } else {
            return (
                <QuestionResult />
            );
        }
    }
}

export default connect(
    ({ userState: { availableUsers, loginUser }, questionState: { questions }}) =>
        ({ availableUsers, loginUser, questions })
)(QuestionDetails);