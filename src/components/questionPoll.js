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
        let question = this.props.questions[this.props.questionId];
        let author = this.props.users[question.author];

        return (
            <Card>
                <CardHeader>{`${author.name} asks:`}</CardHeader>
                <CardBody>
                    <Row>
                        <Col>
                            <img width='250px' height='250px' src={author.avatarURL} alt='user avatar' />
                        </Col>
                        <Col>
                            <CardTitle>Would You Rather ...</CardTitle>
                            <Form>
                                <FormGroup tag="fieldset">
                                    <FormGroup check>
                                        <Label check>
                                        <Input type="radio" name="radio1" value='optionOne' checked 
                                            onChange={this.answerSelected}
                                        />
                                        {question.optionOne.text}
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                        <Input type="radio" name="radio1" value='optionTwo'
                                            onChange={this.answerSelected}
                                        />
                                        {question.optionTwo.text}
                                        </Label>
                                    </FormGroup>
                                </FormGroup>
                                <Button className='btn-block' onClick={this.saveAnswer}>Submit</Button>
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