import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 650px;
    margin-top: 15px;
`;


class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container>
                <h3>{this.props.location.state.title}</h3>
                <span>{this.props.location.state.content}</span>
            </Container>
        )
    }
}

export default NoteView;
