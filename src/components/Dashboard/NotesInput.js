import React from 'react';
import styled from 'styled-components';

const NotesTextarea = styled.textarea`
    max-width: 100%;
    min-width: 100%;
    height: 90px;
`

const NotesInput = (props) => {
    return(
        <div>
            <NotesTextarea placeholder='Description & Notes:'/>
        </div>
    )
}

export default NotesInput;