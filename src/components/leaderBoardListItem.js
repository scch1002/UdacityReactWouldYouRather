import React from 'react';
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table } from 'reactstrap';

export const LeaderBoardListItem = (props) => (
    <Card className='mt-2'>
        <CardBody>
            <Row>
                <Col>
                    <img width='150px' height='150px' src={props.user.avatarURL} alt='user avater' />
                </Col>
                <Col>
                    <Row>
                        <CardTitle>{props.user.name}</CardTitle>
                    </Row>
                    <Row>
                        <Table>
                            <tbody>
                                <tr>
                                    <td>
                                        Answered questions
                                    </td>
                                    <td>
                                        {props.user.answerCount}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Created questions
                                    </td>
                                    <td>
                                        {props.user.questionCount}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
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
