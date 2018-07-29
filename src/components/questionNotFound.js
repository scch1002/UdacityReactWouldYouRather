import React, { Component } from 'react';
import { Card, CardHeader, CardBody,
    CardTitle, CardText, Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';

export default () => (
    <Card>
        <CardBody>
            <CardTitle>Question could not be found.</CardTitle>
            <CardText>The question you are trying to access does not exist.</CardText>
        </CardBody>
    </Card>
);