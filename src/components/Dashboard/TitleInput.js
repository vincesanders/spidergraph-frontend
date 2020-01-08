import React, {useState} from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from 'states/spider-graph';
import act from 'states/act';

const TitleInput = styled.input`
    font-size: 48px;
    font-weight: 600;

    background: none;
    border: none;
    display: inline-block;

    margin: 10px 0;

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
    const title = useSelector(state => state.spiders[state.currentSpider].title);

    const handleChange = e => {
        dispatch(act(actions.EDIT_GRAPH_TITLE, e.target.value))
    }

    return(
        <TitleInput value={title} onChange={handleChange}/>
    )
}