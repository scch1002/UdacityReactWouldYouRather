import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Button, CardHeader, CardBody,
    CardTitle, CardText, Row, Col} from 'reactstrap';
import './questionListItem.css';

export const QuestionListItem = connect(
    ({ users }) => ({ users })
)((props) => 
    {
        let author = props.users[props.question.author];
        return (<Card className="questionListItem">
            <CardHeader>{author.name} asks</CardHeader>
            <CardBody>
                <Row>
                    <Col>
                        <img src={author.avatarURL} />
                    </Col>
                    <Col>
                        <CardTitle tag='strong'>Would you rather</CardTitle>
                        <CardText>
                            {props.question.optionOne.text}
                                <br />
                                or
                                <br />
                            {props.question.optionTwo.text}
                        </CardText>
                        <Button tag={Link} to={`/questions/${props.question.id}`}>View Pull</Button>
                    </Col>
                </Row>
            </CardBody>
        </Card>);
    }
  );
