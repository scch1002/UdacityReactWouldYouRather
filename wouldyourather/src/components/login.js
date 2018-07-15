import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Dropdown } from 'reactstrap';

export const Login = (props) => (
    <Card>
        <CardBody>
          <CardTitle>Welcome to the Would You Rather App!</CardTitle>
          <CardSubtitle>Please sign in to continue</CardSubtitle>
        </CardBody>
        <CardImg top width="318" height="180" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Sign In</CardTitle>
          <Dropdown />
          <Button>Button</Button>
        </CardBody>
    </Card>
);