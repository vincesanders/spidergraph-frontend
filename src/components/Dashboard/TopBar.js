import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'
import {actions, thunks} from 'states/spider-graph';
import act from 'states/act';
import { user } from 'tools/auth';
import {frontToServer, serverToFront} from 'states/spider-graph/converter';
import {initSpider} from 'states/spider-graph/initialState';
import {getIndexOfSpiderWithServerId} from 'states/spider-graph/utils';
import DropDown from './DropDown';

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
    border-radius: 50%;
    width: 32px;
    height: 30px;
    font-size: 20px;
    margin-left: 10px;
    border: 1px solid #2e3c82;
    padding: 0 2px;
    background: #7282cc;
    color: #2e3c82;
    cursor: pointer;
    &:hover{
        border-color: white;
        color: white;
    }
`

// const SavedGraphsDropDown = styled.div`
//     position: relative;
//     display: inline-block;
//     margin-right: 10px;
// `

const GraphButton = (props) => {
    const GraphButtonStyled = styled(TopBarButton)`
        height: 100%;
        margin-right: 1px;
        background: ${props.active ? '#1A2247' : '#2e3c82'};
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        cursor: pointer;

        &:hover{
            box-shadow: inset 0px 0px 0px 1px #7282cc;
        }
    `

    const DeleteGraphButton = styled(TopBarButton)`
        border-radius: 50%;
        width: 30px;
        height: 30px;
        margin-left: 10px;
        border: 1px solid #2e3c82;
        padding: 0 2px;
        background: #7282cc;
        color: #2e3c82;

        &:hover{
            border-color: white;
            color: white;
        }
    `

    return (
        <GraphButtonStyled onClick={props.openGraph}>
            {props.content}
            <DeleteGraphButton onClick={props.deleteGraph}>
                <FontAwesomeIcon icon={faTimes} />
            </DeleteGraphButton>
        </GraphButtonStyled>
    )
}

const AppTitle = styled.h3`
    margin: 0 25px 0 5px;
`

const TopBar = () => {
    const currentUser = user.data.get ();
    const dispatch = useDispatch();
    const openedSpiders = useSelector(state => state.openedSpiders);
    const savedSpiders = useSelector(state => state.savedSpiders);
    const currentSavedSpider = useSelector(state => state.currentSavedSpider);

    const [savedGraphsMenu, setSavedGraphsMenu] = useState(false);
    const toggleSavedGraphsMenu = () => {
        setSavedGraphsMenu(! savedGraphsMenu);
    }

    const addNewGraph = () => {
        // add new front template graph to open graphs, switch to that one now
        // call post to add this template to the server, 
        // on POST graph success, set this graph to have the ID in reply from server
        dispatch(act(actions.ADD_GRAPH));

        const serverNewGraph = frontToServer(initSpider(), currentUser.id);

        dispatch(thunks.postGraph(serverNewGraph));
    }

    const openGraph = (e, serverId) => {
        e.stopPropagation();
        
        const openSpiderIndex = getIndexOfSpiderWithServerId(openedSpiders, serverId);
        // if graph is in openedSpiders, open it locally, else call server get and open it locally
        if (openSpiderIndex >= 0){
            dispatch(act(actions.OPEN_GRAPH, serverId));
        } else {
            dispatch(act(actions.OPEN_GRAPH, serverId));
            dispatch(thunks.getGraph(serverId))
        }
    }

    const deleteGraph = (e, serverId, prevSpiderId) => {
        e.stopPropagation();
        dispatch(act(actions.DELETE_GRAPH, serverId));
        dispatch(thunks.deleteGraph(serverId));

        //open a different graph
        //check if there is a previous spider
        if (prevSpiderId >= 0) {
            //if yes, open that spider
            //check if previous spider is in openedSpiders
            const openSpiderIndex = getIndexOfSpiderWithServerId(openedSpiders, prevSpiderId);
            // if graph is in openedSpiders, open it locally, else call server get and open it locally
            if (openSpiderIndex >= 0){
                dispatch(act(actions.OPEN_GRAPH, prevSpiderId));
            } else {
                dispatch(act(actions.OPEN_GRAPH, prevSpiderId));
                dispatch(thunks.getGraph(prevSpiderId))
            }
        } else {
            //if no, open new default spider (addSpider)
            addNewGraph();
        }
    }


    // temp

    // const [savedGraphs, setSavedGraphs] = useState([
    //     {title: 'Graph 1', id: '11', active: false},
    //     {title: 'Graph 2', id: '22', active: true},
    //     {title: 'Graph 3', id: '33', active: false},
    //     {title: 'Graph 4', id: '44', active: true},
    // ])

    // const openGraphActual = (event, graphId) => {
    //     event.stopPropagation();
    //     setSavedGraphs(savedGraphs.map((graph, index) => (
    //         (graph.id === graphId)
    //         ? {...graph, active: !graph.active}
    //         : graph
    //     )))
    // }

     // end temp

    return(
        <Topbar>
            <a href="https://vincesanders.github.io/spidergraph-marketing-page/index.html">
                <AppTitle >Spider.Graph</AppTitle>
            </a>
            {/* <OpenGraphButton onClick={addNewGraph}>Open</OpenGraphButton> */}
            {/* <SavedGraphsDropDown onClick={toggleSavedGraphsMenu}>
                <span>Saved Graphs</span>
                <DropDown active={savedGraphsMenu} savedGraphs={savedGraphs} openGraph={openGraphActual}/>
            </SavedGraphsDropDown> */}
            {/* {spiders.map((spider, index) => (
                <GraphButton openGraph={(e) => openGraph(e, index)} deleteGraph={(e) => deleteGraph(e, index)} content={spider.title} active={index === currentGraph} key={index}/>
            ))} */}
            {savedSpiders.map((savedSpider, index) => (
                <GraphButton openGraph={(e) => openGraph(e, savedSpider.id)} deleteGraph={(e) => deleteGraph(e, savedSpider.id, (index === 0 ? -1 : savedSpiders[index - 1].id))} 
                content={savedSpider.title} active={index === currentSavedSpider} key={index}/>
            ))}
            <NewGraphButton onClick={addNewGraph}><FontAwesomeIcon icon={faPlus} /></NewGraphButton>
            {/* <span>uid: {currentUser.id}</span> */}
        </Topbar>
    )
}

export default TopBar;
