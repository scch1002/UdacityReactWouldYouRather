import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody,
    CardTitle, Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';
import { answerQuestion } from '../actions/users';

class QuestionResult extends Component {
    render() {
        let question = this.props.questions.find(f => f.id === this.props.questionId);
        let author = this.props.users.find(f => f.id === question.author);
        let questionAnswer = this.props.loginUser.answers[question.id];

        return (
            <Card>
                <CardHeader>{`Asked by ${author.name}`}</CardHeader>
                <CardBody>
                    <Row>
                        <Col>
                            <img src={author.avatarURL} />
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
                </CardBody>
            </Card>
        );
    }
}

export default connect(
    ({ users, loginUser, questions }) =>
        ({ users, loginUser, questions })
)(QuestionResult);