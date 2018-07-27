import React from 'react';
import { Card, Button, CardHeader, CardBody,
    CardTitle, CardText, Row, Col } from 'reactstrap';

export const LeaderBoardListItem = (props) => (<Card>
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
                                {props.user.answerCount}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Created questions
                            </Col>
                            <Col>
                                {props.user.questionCount}
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Card>
                            <CardHeader>Score</CardHeader>
                            <CardBody>
                                <CardTitle>{props.user.score}</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </CardBody>
        </Card>
);
