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
    justify-content: flex-start;
    align-items: center;

    color: #FFFFFF;

    border-bottom: 3px solid #26326B;
`

const TopBarButton = styled.button`
    border: none;
    background: none;
    outline: none;
    color: #FFFFFF;
`

const NewGraphButton = styled(TopBarButton)`
    font-size: 4rem;
    margin-left: 10px;
`

const GraphButton = (props) => {
    console.log(props.active);
    const GraphButtonStyled = styled(TopBarButton)`
    height: 100%;
    /* background: #26326B; */
    margin-right: 1px;
    background: ${props.active? '#26326B' : '#1A2247'};
`
    return (
        <GraphButtonStyled onClick={props.action}>{props.content}</GraphButtonStyled>
    )

}


const AppTitle = styled.h3`
    margin-right: 10px;
`

const TopBar = () => {
    const dispatch = useDispatch();
    const spiders = useSelector(state => state.spiders);
    const currentGraph = useSelector(state => state.currentSpider);
    console.log('current graph: ',currentGraph);
    const addNewGraph = () => {
        dispatch({type: actions.ADD_GRAPH});
    }

    const openGraph = indexToOpen => {
        dispatch({type: actions.OPEN_GRAPH, payload: indexToOpen});
    }

    return(
        <Topbar>
            <AppTitle >Spider.Graph</AppTitle>
            {spiders.map((spider, index) => (
                <GraphButton action={() => openGraph(index)} content={spider.title} active={index === currentGraph}/>
                // <GraphButton onClick={() => openGraph(index)}>{spider.title}</GraphButton>
            ))}
            <NewGraphButton onClick={addNewGraph}>+</NewGraphButton>
        </Topbar>
    )
}

export default TopBar;
