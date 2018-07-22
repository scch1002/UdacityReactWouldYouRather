import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody,
    CardTitle, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

class QuestionDetails extends Component {
    render() {
        let question = this.props.questions.find(f => f.id === this.props.match.params.question_id);
        let author = this.props.availableUsers.find(f => f.id === question.author);
        let questionAnswer = this.props.loginUser.answers[question.id];

        if (questionAnswer === undefined) {
            return (
                <Card>
                    <CardHeader>{`${author.name} asks:`}</CardHeader>
                    <CardBody>
                        <CardTitle>Would You Rather ...</CardTitle>
                        <Form>
                            <FormGroup tag="fieldset">
                                <FormGroup check>
                                    <Label check>
                                    <Input type="radio" name="radio1" />{' '}
                                    Option one is this and that—be sure to include why it's great
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                    <Input type="radio" name="radio1" />{' '}
                                    Option two can be something else and selecting it will deselect option one
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>  
            );
        } else {
            return (
                <Card>
                    <CardHeader>{`Asked by ${author.name}`}</CardHeader>
                    <Row>
                        <Col>
                            User Picture
                        </Col>
                        <Col>
                            <CardBody>
                                <CardTitle>Option 1</CardTitle>
                            </CardBody>
                            <CardBody>
                                <CardTitle>Option 2</CardTitle>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>
            );
        }
    }
}

export default connect(
    ({ userState: { availableUsers, loginUser }, questionState: { questions }}) =>
        ({ availableUsers, loginUser, questions })
)(QuestionDetails);