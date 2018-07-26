
 import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Button, CardHeader, CardBody,
    CardTitle, CardText, Row, Col } from 'reactstrap';

export const LeaderBoardListItem = (props) =>  {
        let answerArray = Object.values(props.user.answers);
        return (<Card>
            <CardBody>
                <Row>
                    <Col>
                        <img src={props.user.avatarURL} alt='user avater' />
                    </Col>
                    <Col>
                        <CardTitle>{props.user.name}</CardTitle>
                        <Row>
                            <Col>
                                Answered questions
                            </Col>
                            <Col>
                                {Object.values(props.user.answers).length}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Created questions
                            </Col>
                            <Col>
                                {props.user.questions.length}
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Card>
                            <CardHeader>Score</CardHeader>
                            <CardBody>
                                <CardTitle>{props.user.questions.length + answerArray.length}</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </CardBody>
        </Card>)
};
