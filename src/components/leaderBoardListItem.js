
 import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Button, CardHeader, CardBody,
    CardTitle, CardText, Row, Col } from 'reactstrap';

export const LeaderBoardListItem = (props) => (<Card>
            <CardBody>
                <Row>
                    <Col>
                        <img alt='user avater' />
                    </Col>
                    <Col>
                        <CardTitle>{props.user.name}</CardTitle>
                        <Row>
                            <Col>
                                Answered questions
                            </Col>
                            <Col>
                                3
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Created questions
                            </Col>
                            <Col>
                            4
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Card>
                            <CardHeader>Score</CardHeader>
                        </Card>
                    </Col>
                </Row>
            </CardBody>
        </Card>);
