import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

import Sidebar from './Components/Sidebar';
import Notes from './Components/Notes';
import NoteView from './Components/NoteView';
import NewNoteForm from './Components/NewNote';
import UpdateNote from './Components/UpdateNote';


const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const AppContent = styled.div`
    width: 900px;
    border: 1px solid #BABABA;
    display: flex;
`;

const MainContent = styled.div`
    width: 725px;
    background: #F0EFF0;
    display: flex;
    height: 100%;
    justify-content: center;
`;


class App extends Component {

    render() {
        return (
            <Container>
                <AppContent>
                    <Sidebar />
                    <MainContent>
                        <Route path='/notes' component={Notes} />
                        <Route path='/view-note' component={NoteView} />
                        <Route path='/new-note' component={NewNoteForm} />
                        <Route path='/update-note' component={UpdateNote} />
                    </MainContent>
                </AppContent>
            </Container>
        )
    }
}

export default App;