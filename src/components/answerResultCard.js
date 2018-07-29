import React, { Component, Fragment } from 'react';
import { Card, CardHeader, CardBody,
    CardText, CardTitle, Form, FormGroup, Label, Input, Row, Col, Button, Alert} from 'reactstrap';
import 'react-circular-progressbar/dist/styles.css';
import CircularProgressbar from 'react-circular-progressbar';

export const AnswerResultCard = (props) => {
    let percentage = Math.round((props.numberVotes/props.totalVotes) * 100);
    return (<Card>
        <CardBody>
            <Row>
                <Col>
                    <p className='h5 mb-1'>{props.optionText}</p>
                    <p className='h6'>{`${props.numberVotes} out of ${props.totalVotes} votes`}</p>
                    {props.loginUserAnswer !== false && 
                        (
                            <Alert color="success">
                                Your Vote
                            </Alert>
                        )
                        }
                </Col>
                <Col>
                    <div style={{ width: '100px' }}>
                        <CircularProgressbar percentage={percentage} text={`${percentage}%`} />
                    </div>
                </Col>
            </Row>
            </CardBody>
    </Card>);
}