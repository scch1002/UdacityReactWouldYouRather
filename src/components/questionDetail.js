import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody,
    CardTitle, Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';
import QuestionPoll from './questionPoll';
import QuestionResult from './questionResult';
import QuestionNotFound from './questionNotFound';

class QuestionDetail extends Component {
    render() {

        if (this.props.questions[this.props.match.params.question_id] === undefined) {
            return (
                <QuestionNotFound />
            )
        }

        let questionAnswer = this.props.answers[this.props.match.params.question_id];

        if (questionAnswer === undefined) {
            return (
                <QuestionPoll questionId={this.props.match.params.question_id} />
            );
        } else {
            return (
                <QuestionResult questionId={this.props.match.params.question_id} />
            );
        }
    }
}

export default connect(
    ({ loginUser, users, questions }) =>
        ({ 
            answers: users[loginUser].answers,
            questions: questions
         })
)(QuestionDetail);