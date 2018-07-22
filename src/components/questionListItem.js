import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Button, CardHeader, CardBody,
    CardTitle, CardText } from 'reactstrap';

export const QuestionListItem = connect(
    ({ userState: { availableUsers }}) => ({ availableUsers })
)((props) => 
    {
        let author = props.availableUsers.find(f => f.id === props.question.author);
        return (<Card>
            <CardHeader>{author.name} asks</CardHeader>
            <CardBody>
                <CardTitle>Would you rather</CardTitle>
                <CardText>A description.</CardText> 
                <Button tag={Link} to={`/questions/${props.question.id}`}>View Pull</Button>
            </CardBody>
        </Card>);
    }
  );
