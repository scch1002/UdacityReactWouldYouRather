import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody,
    CardText, CardTitle, Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';
import { AnswerResultCard } from './answerResultCard';

class QuestionResult extends Component {
    render() {
        let question = this.props.questions[this.props.questionId];
        let author = this.props.users[question.author];
        let questionAnswer = this.props.users[this.props.loginUser].answers[question.id];

        return (
            <Card>
                <CardHeader>{`Asked by ${author.name}`}</CardHeader>
                <CardBody>
                    <Row>
                        <Col>
                            <img width='250px' height='250px' src={author.avatarURL} />
                        </Col>
                        <Col>
                            <CardTitle>Results:</CardTitle>
                            <AnswerResultCard 
                                optionText={question.optionOne.text}
                                numberVotes={question.optionOne.votes.length} 
                                totalVotes={question.optionOne.votes.length + question.optionTwo.votes.length}
                                loginUserAnswer={questionAnswer === 'optionOne'} />
                            <AnswerResultCard 
                                optionText={question.optionTwo.text}
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