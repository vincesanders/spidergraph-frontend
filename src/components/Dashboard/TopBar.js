import React from 'react';
import styled from 'styled-components'

const Topbar = styled.div`
    width: 100%;
    height: 56px;
    background: #4054B2;

    padding: 0 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: #FFFFFF;
`

const NewGraphButton = styled.button`
    background: green;
    font-size: 4rem;
    border: none;
    background: none;
    outline: none;
    color: #FFFFFF;
`

const TopBar = () => {
    return(
        <Topbar>
            <h3>Spider.Graph</h3>
            <NewGraphButton>+</NewGraphButton>
        </Topbar>
    )
}

export default TopBar;
