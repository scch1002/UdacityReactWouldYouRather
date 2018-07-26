import React, { Component } from 'react';
import { Card, CardHeader, CardBody,
    CardText, CardTitle, Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';

export const AnswerResult = (props) => (
    <Card>
        <CardBody>
            <CardText>{props.answerText}</CardText>
        </CardBody>
        <CardBody>
            {`${props.numberVotes} out of ${props.totalVotes} votes`}
        </CardBody>
        {props.loginUserAnswer !== false && 
            (
                <CardBody>
                    Your Vote
                </CardBody>
            )
            }
    </Card>
);