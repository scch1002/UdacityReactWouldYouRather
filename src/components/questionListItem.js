import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Button, CardHeader, CardBody,
    CardTitle, CardText, Row, Col} from 'reactstrap';

export const QuestionListItem = connect(
    ({ users }) => ({ users })
)((props) => 
    {
        let author = props.users[props.question.author];
        return (<Card className="mt-2">
            <CardHeader>{author.name} asks</CardHeader>
            <CardBody>
                <Row>
                    <Col>
                        <img width='150px' height='150px' src={author.avatarURL} />
                    </Col>
                    <Col>
                        <CardTitle className='h5'>Would You Rather ...</CardTitle>
                        <CardText>
                            <p class='text-center'>
                                {props.question.optionOne.text}
                                    <br />
                                    OR
                                    <br />
                                {props.question.optionTwo.text}
                            </p>
                        </CardText>
                        <Button className='btn-block' tag={Link} to={`/questions/${props.question.id}`}>View Pull</Button>
                    </Col>
                </Row>
            </CardBody>
        </Card>);
    }
  );
