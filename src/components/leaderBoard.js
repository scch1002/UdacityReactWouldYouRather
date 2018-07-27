import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';
import { LeaderBoardListItem } from './leaderBoardListItem';

const LeaderBoard = (props) => (
      <Fragment>
        { props.users
            .map(m => (<LeaderBoardListItem user={m}></LeaderBoardListItem>))
        }
      </Fragment>
    );

export default connect(({ users }) => ({ users: Object.values(users) }))
  (LeaderBoard);