import React from 'react';
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux';
import actions from '../../states/spider-graph/actions';

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

const TopBarButton = styled.button`
    border: none;
    background: none;
    outline: none;
    color: #FFFFFF;
`

const NewGraphButton = styled(TopBarButton)`
    font-size: 4rem;
    
`

const GraphButton = styled.button`
`

const TopBar = () => {
    const dispatch = useDispatch();
    const spiders = useSelector(state => state.spiders);

    const addNewGraph = () => {
        dispatch({type: actions.ADD_GRAPH});
    }

    const openGraph = indexToOpen => {
        dispatch({type: actions.OPEN_GRAPH, payload: indexToOpen});
    }

    return(
        <Topbar>
            <h3>Spider.Graph</h3>
            {spiders.map((spider, index) => (
                <GraphButton onClick={() => openGraph(index)}>{spider.title}</GraphButton>
            ))}
            <NewGraphButton onClick={addNewGraph}>+</NewGraphButton>
        </Topbar>
    )
}

export default TopBar;
