import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';

class Login extends Component {   
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    onSelectLoginUser = (event) => {
        this.setState({
            selectedUser: this.props.users.find(f => f.id === event.target.value)
        });
    }
    render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle>Welcome to the Would You Rather App!</CardTitle>
                    <CardSubtitle>Please sign in to continue</CardSubtitle>
                </CardBody>
                <CardImg top width="318" height="180" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Sign In</CardTitle>
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}> 
                        <DropdownToggle caret>
                            { this.state.selectedUser !== undefined ? this.state.selectedUser.name : 'Select User'}
                        </DropdownToggle>
                        <DropdownMenu>
                            {this.props.users !== undefined ? this.props.users.map(m => 
                                m !== undefined ?
                                <DropdownItem onClick={this.onSelectLoginUser} value={m.id}>{m.name}</DropdownItem>
                                : ''
                            ) : ''}
                        </DropdownMenu>
                    </Dropdown>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        );
    }
}

export default connect(
    (({ users }) => users !== undefined ? ({ users: [ users.sarahedo, users.tylermcginnis, users.johndoe ] }) : { users: undefined })
)(Login);