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

    border-top: 8px solid #4054B2;
    border-bottom: 8px solid #2e3c82;
`

const TopBarButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    border: none;
    background: none;
    outline: none;
    color: #FFFFFF;


`

const NewGraphButton = styled(TopBarButton)`
    border-radius: 50px;
    width: 1rem;
    height: 4rem;
    font-size: 3rem;
    margin-left: 10px;
    &:hover{
        background: #7282cc;
    }

`

const GraphButton = (props) => {
    const GraphButtonStyled = styled(TopBarButton)`
        height: 100%;
        margin-right: 1px;
        background: ${props.active? '#2e3c82' : '#1A2247'};
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;

        &:hover{
            box-shadow: inset 0px 0px 0px 1px #7282cc;
        }

        &:active{
            background:#2e3c82;
        }

    `

    const DeleteGraphButton = styled(TopBarButton)`
        border-radius: 50px;
        width: 1rem;
        height: 4rem;
        margin-left: 10px;

        &:hover{
            background: #7282cc;
        }
    `
    return (
        <GraphButtonStyled onClick={props.openGraph}>
            {props.content}
            <DeleteGraphButton onClick={props.deleteGraph}>X</DeleteGraphButton>
        </GraphButtonStyled>
    )

}


const AppTitle = styled.h3`
    margin: 0 25px 0 5px;
`

const TopBar = () => {
    const dispatch = useDispatch();
    const spiders = useSelector(state => state.openedSpiders);
    const currentGraph = useSelector(state => state.currentSpider);
    console.log('current graph: ',currentGraph);
    const addNewGraph = () => {
        dispatch({type: actions.ADD_GRAPH});
    }

    const openGraph = (e, index) => {
        e.stopPropagation();
        dispatch({type: actions.OPEN_GRAPH, payload: index});
    }

    const deleteGraph = (e, index) => {
        e.stopPropagation();
        dispatch({type: actions.DELETE_GRAPH, payload: index});
    }

    return(
        <Topbar>
            <AppTitle >Spider.Graph</AppTitle>
            {spiders.map((spider, index) => (
                <GraphButton openGraph={(e) => openGraph(e, index)} deleteGraph={(e) => deleteGraph(e, index)} content={spider.title} active={index === currentGraph}/>
            ))}
            <NewGraphButton onClick={addNewGraph}>+</NewGraphButton>
        </Topbar>
    )
}

export default TopBar;
