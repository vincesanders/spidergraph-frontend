import React from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {actions, thunks} from 'states/spider-graph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import act from 'states/act';

const Container = styled.div`
    button {
        font-size: 36px;
        width: 54px;
        outline: none;
        border: 1px solid #FF5252;
        background-color: transparent;
        color: #FF5252;
        font-weight: 600;
        border-radius: 50%;
        text-align: center;
        text-decoration: none;
        margin-left: 3px;
        margin-right: 15px;
        margin-bottom: 6px;
        /* Added for animation */
        transition: 0.2s linear;
        opacity: 0.5;
        &:hover {
            font-size: 40px;
            opacity: 1;
            width: 60px;
            margin-left: 0;
            margin-right: 12px;
            margin-bottom: 0;
        }
    }
`

const TitleInput = styled.input`
    width: 40%;
    font-size: 48px;
    font-weight: 600;

    background: none;
    border: none;
    display: inline-block;

    margin: 0 0 10px 0;

    &:hover{
        background: white;
        box-shadow: inset 0px 0px 0px 1px grey;
    }

    &:focus{
        background: white;
        box-shadow: inset 0px 0px 0px 1px grey;
    }
`

export default () => {
    const dispatch = useDispatch();
    const title = useSelector(state => state.openedSpiders[state.currentSpider].title);
    const graphId = useSelector(state => state.openedSpiders[state.currentSpider].id);

    const deleteGraph = e => {
        e.stopPropagation();
        dispatch(act(actions.DELETE_GRAPH, graphId));
        dispatch(thunks.deleteGraph(graphId));
    }

    const handleChange = e => {
        dispatch(act(actions.EDIT_GRAPH_TITLE, { id: graphId, title: e.target.value }));
    }

    return(
        <Container>
            <button className='DeletetButton' onClick={deleteGraph} >
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <TitleInput value={title} onChange={handleChange}/>
        </Container>
    )
}
