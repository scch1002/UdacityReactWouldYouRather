import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';
import { LeaderBoardListItem } from './leaderBoardListItem';

const LeaderBoard = (props) => (
      <Fragment>
        { props.users
            .map(m => ({
              avatarURL: m.avatarURL,
              name: m.name,
              questionCount: m.questions.length,
              answerCount: Object.values(m.answers).length,
              score: m.questions.length + Object.values(m.answers).length
            }))
            .sort((s1, s2) => s2.score - s1.score)
            .map(m => (<LeaderBoardListItem user={m}></LeaderBoardListItem>))
        }
      </Fragment>
    );

export default connect(({ users }) => ({ users: Object.values(users) }))
  (LeaderBoard);