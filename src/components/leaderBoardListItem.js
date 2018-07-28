import React from 'react';
import { Card, Button, CardHeader, CardBody,
    CardTitle, CardText, Row, Col } from 'reactstrap';

export const LeaderBoardListItem = (props) => (<Card className='mt-2'>
            <CardBody>
                <Row>
                    <Col>
                        <img src={props.user.avatarURL} alt='user avater' />
                    </Col>
                    <Col>
                        <CardTitle>{props.user.name}</CardTitle>
                        <Row>
                            <Col className='small text-left'>
                                <strong>Answered questions</strong>
                            </Col>
                            <Col className='small text-right'>
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
                            <CardHeader className='text-center'>Score</CardHeader>
                            <CardBody>
                                <CardTitle className='text-center'>{props.user.score}</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </CardBody>
        </Card>
);
