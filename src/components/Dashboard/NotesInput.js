import React, {useState} from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from 'states/spider-graph';
import act from 'states/act';

const NotesTextarea = styled.textarea`
    max-width: 100%;
    min-width: 100%;
    height: 90px;
`

const NotesInput = (props) => {
    const dispatch = useDispatch();
    const notes = useSelector(state => state.openedSpiders[state.currentSpider].notes);

    const handleChange = e => {
        dispatch(act(actions.EDIT_GRAPH_NOTES, e.target.value))
    }

    return(
        <div>
            <NotesTextarea
            placeholder='Description & Notes:'
            value={notes}
            onChange={handleChange}
            />
        </div>
    )
}

export default NotesInput;
