import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

export default () => (
    <Card>
        <CardBody>
            <CardTitle>Question could not be found.</CardTitle>
            <CardText>The question you are trying to access does not exist.</CardText>
        </CardBody>
    </Card>
);