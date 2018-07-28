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
                        <CardTitle tag='strong'>Would you rather</CardTitle>
                        <CardText>
                            {props.question.optionOne.text}
                                <br />
                                or
                                <br />
                            {props.question.optionTwo.text}
                        </CardText>
                        <Button className='btn-block' tag={Link} to={`/questions/${props.question.id}`}>View Pull</Button>
                    </Col>
                </Row>
            </CardBody>
        </Card>);
    }
  );
