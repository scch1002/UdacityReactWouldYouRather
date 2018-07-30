import React from 'react';
import { connect } from 'react-redux';
import QuestionPoll from './questionPoll';
import QuestionResult from './questionResult';
import QuestionNotFound from './questionNotFound';

const QuestionDetail = (props) => {
    if (props.questions[props.match.params.question_id] === undefined) {
        return (
            <QuestionNotFound />
        )
    }

    let questionAnswer = props.answers[props.match.params.question_id];

    if (questionAnswer === undefined) {
        return (
            <QuestionPoll questionId={props.match.params.question_id} />
        );
    } else {
        return (
            <QuestionResult questionId={props.match.params.question_id} />
        );
    }
};

export default connect(
    ({ loginUser, users, questions }) =>
        ({ 
            answers: users[loginUser].answers,
            questions: questions
         })
)(QuestionDetail);