import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody,
    CardTitle, Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';
import { answerQuestion } from '../actions/users';

class QuestionPoll extends Component {
    state = {
        selectedOption: 'optionOne'  
    }
    constructor(props) {
        super(props);
    }
    answerSelected = (event) => {
        this.setState({
            selectedOption: event.target.value
        });
    }
    saveAnswer = () => {
        this.props.dispatch(answerQuestion(this.props.questionId, this.state.selectedOption))
    }
    render() {
        let question = this.props.questions.find(f => f.id === this.props.questionId);
        let author = this.props.users.find(f => f.id === question.author);

        return (
            <Card>
                <CardHeader>{`${author.name} asks:`}</CardHeader>
                <CardBody>
                    <Row>
                        <Col>
                            <img src={author.avatarURL} alt='user avatar' />
                        </Col>
                        <Col>
                            <CardTitle>Would You Rather ...</CardTitle>
                            <Form>
                                <FormGroup tag="fieldset">
                                    <FormGroup check>
                                        <Label check>
                                        <Input type="radio" name="radio1" value='optionOne' checked />
                                        {question.optionOne.text}
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                        <Input type="radio" name="radio1" value='optionTwo' />
                                        {question.optionTwo.text}
                                        </Label>
                                    </FormGroup>
                                </FormGroup>
                                <Button onClick={this.saveAnswer}>Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </CardBody>
            </Card>  
        );
    }
}

export default connect(
    ({ users, loginUser , questions }) =>
        ({ users, loginUser, questions })
)(QuestionPoll);