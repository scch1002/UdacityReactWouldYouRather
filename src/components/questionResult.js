import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody,
    CardText, CardTitle, Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';
import { answerQuestion } from '../actions/users';
import { AnswerResult } from './answerResultCard';

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
                            <CardTitle>Results:</CardTitle>
                            <AnswerResult 
                                numberVotes={question.optionOne.votes.length} 
                                totalVotes={question.optionOne.votes.length + question.optionTwo.votes.length}
                                loginUserAnswer={questionAnswer === 'optionOne'} />
                            <AnswerResult 
                                numberVotes={question.optionTwo.votes.length} 
                                totalVotes={question.optionOne.votes.length + question.optionTwo.votes.length}
                                loginUserAnswer={questionAnswer === 'optionTwo'} />
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