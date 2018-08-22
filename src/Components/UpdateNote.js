import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Container = styled.form`
    width: 650px;
    margin-top: 60px;
    display: flex;
    flex-wrap: wrap;
`;

const Header = styled.h3`
    width: 100%;
`;

const Title = styled.input`
    width: 350px;
    height: 30px;
    border-radius: 2px;
    margin-bottom: 10px;
    padding-left: 15px;
`;

const Content = styled.input`
    width: 100%;
    height: 500px;
    border-radius: 2px;
    padding-left: 15px;
    padding-top: 15px
    line-height: 20px
    margin-bottom: 10px;
`;


class UpdateNote extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            content: '',
        }
    }


    updateInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitChanges= e => {
        const note = {
            title: this.state.title,
            content: this.state.content,
        }
        axios
            .put('http://localhost:8000/update-note', note)
            .then( res => {
                console.log('The note has been updated')
            })
            .catch(err => console.log(err))
        this.setState({ title: '', content: '' })
    }


    render() {
        return (
            <Container>
                <Header>Edit Note:</Header>
                <Title
                    type='text'
                    placeholder='Note Title'
                    name='title'
                    value={this.state.title}
                    onChange={this.updateInputChange}
                />
                <Content 
                    type='text'
                    placeholder='Note Content'
                    name='content'
                    value={this.state.content}
                    onChange={this.updateInputChange}
                />
                <Link to='/notes' onClick={this.submitChanges} stlye={{ textDecoration: 'none', width: '175px', height: '20px', paddingTop: '10px', background: '#20AFB5', color: 'white', font: 'bold', fontSize: '14px', textAlign: 'center' }} >
                    Update
                </Link>
            </Container>
        )
    }
}

export default UpdateNote;