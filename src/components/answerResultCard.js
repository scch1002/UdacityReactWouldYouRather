import React, { Component, Fragment } from 'react';
import { Card, CardHeader, CardBody,
    CardText, CardTitle, Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';
import 'react-circular-progressbar/dist/styles.css';
import CircularProgressbar from 'react-circular-progressbar';

export const AnswerResultCard = (props) => {
    let percentage = Math.round((props.numberVotes/props.totalVotes) * 100);
    return (<Card>
        <CardBody>
            <Row>
                <Col>
                    {props.optionText}
                    <br />
                    {`${props.numberVotes} out of ${props.totalVotes} votes`}
                    {props.loginUserAnswer !== false && 
                        (
                            <Fragment>
                                <br />
                                    Your Vote
                            </Fragment>
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