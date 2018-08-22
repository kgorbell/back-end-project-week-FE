import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container = styled.div`
    width: 650px;
    margin-top: 15px;
`;

const Nav = styled.div`
    text-align: right;
    margin-bottom: 25px;
`;


class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
        }
    }

    render() {
        return (
            <Container>
                <Nav>
                    <Link to={{ pathname: `/update-note/${this.props.location.state.id}`,  state: this.props.location.state }} style={{ paddingRight: '15px', color: 'black' }} >
                        edit
                    </Link>
                    <span>delete</span>
                </Nav>
                <h3>{this.props.location.state.title}</h3>
                <span>{this.props.location.state.content}</span>
            </Container>
        )
    }
}

export default NoteView;
