import React, { Component, Fragment } from 'react';
import { Card, CardHeader, CardBody,
    CardText, CardTitle, Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';

export const AnswerResultCard = (props) => (
    <Card>
        <CardBody>
            <CardText>{props.answerText}</CardText>
        </CardBody>
        <CardBody>
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
            </CardBody>
    </Card>
);