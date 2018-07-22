import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody,
    CardTitle, Form, FormGroup, Label, Input } from 'reactstrap';

class QuestionDetails extends Component {
    render() {
        let question = this.props.questions.find(f => f.id === this.props.match.params.question_id);
        let author = this.props.availableUsers.find(f => f.id === question.author);

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
    }
}

export default connect(
    ({ userState: { availableUsers }, questionState: { questions }}) =>
        ({ availableUsers, questions })
)(QuestionDetails);