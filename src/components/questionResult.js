import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody,
    CardTitle, Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';
import { answerQuestion } from '../actions/users';

class QuestionResult extends Component {
    render() {
        let question = this.props.questions.find(f => f.id === this.props.questionId);
        let author = this.props.availableUsers.find(f => f.id === question.author);
        let questionAnswer = this.props.loginUser.answers[question.id];

        return (
            <Card>
                <CardHeader>{`Asked by ${author.name}`}</CardHeader>
                <Row>
                    <Col>
                        User Picture
                    </Col>
                    <Col>
                        <CardBody>
                            <CardTitle>{question.optionOne.text}</CardTitle>
                        </CardBody>
                        <CardBody>
                            <CardTitle>{question.optionTwo.text}</CardTitle>
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default connect(
    ({ userState: { availableUsers, loginUser }, questionState: { questions }}) =>
        ({ availableUsers, loginUser, questions })
)(QuestionResult);