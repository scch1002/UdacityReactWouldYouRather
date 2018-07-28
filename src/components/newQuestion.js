import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Button, CardHeader, CardBody,
    CardTitle, CardText, Form, FormGroup, Input } from 'reactstrap';
import { saveQuestion } from '../actions/questions';

class NewQuestion extends React.Component {
    state = {
        author: '',
        optionOneText: '',
        optionTwoText: ''
    }
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.setState(
            {
               author: this.props.userInfo.id
            });
    }
    onOptionOneChange = (event) => {
        this.setState({
            optionOneText: event.target.value
        });
    }
    onOptionTwoChange = (event) => {
        this.setState({
            optionTwoText: event.target.value
        });
    }
    saveNewQuestion = () => {
        this.props.dispatch(saveQuestion({author: this.state.author, 
            optionOneText: this.state.optionOneText, 
            optionTwoText: this.state.optionTwoText }));
    }
    render() {
        return (
            <Card>
                <CardHeader className='h4 text-center'>Create New Question</CardHeader>
                <CardBody>
                    <Form> 
                        <strong className='text-secondary'>Complete the question:</strong>
                        <p className='h5 mt-3'>Would you rather ...</p>
                        <FormGroup>
                        <Input type="text" onChange={this.onOptionOneChange} value={this.state.optionOneText} placeholder="Enter Option One Text Here" />
                        </FormGroup>
                        <p className='h6 text-center'>Or</p>
                        <FormGroup>
                        <Input type="text" onChange={this.onOptionTwoChange} value={this.state.optionTwoText} placeholder="Enter Option Two Text Here" />
                        </FormGroup>
                        <Button className='btn-block' onClick={this.saveNewQuestion}>Submit</Button>
                    </Form>
                </CardBody>
            </Card>
        )
    }
}

export default connect(({ loginUser, users }) => ({ userInfo: users[loginUser] }))(NewQuestion);