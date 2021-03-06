import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const NoteBody = styled.div`
    width: 170px;
    border: 1px solid #BABABA;
    background: white;
    height: 200px;
    margin-bottom: 25px;
    padding-top: 8px;
    padding-left: 15px;
    padding-right: 15px;
`;

const Title = styled.span`
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
    line-height: 25px;
`;

const Content = styled.div`
    width: 100%;
    margin-top: 5px;
    padding-top: 8px;
    border-top: 2px solid #D0D0D0;
`;


const Note = (props) => {
    return ( 
        <Link 
            to={{ pathname: `/view-note/${props.note.id}`, state: props.note }}
            style={{ textDecoration: 'none', color: 'black' }}
        >
            <NoteBody>
                <Title>{props.note.title}</Title>
                <Content>{props.note.content}</Content>
            </NoteBody>
        </Link>
     );
}
 
export default Note;