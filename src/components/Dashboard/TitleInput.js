import React from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {actions, thunks} from 'states/spider-graph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {frontToServer} from 'states/spider-graph/converter';
import {initSpider} from 'states/spider-graph/initialState';
import {getIndexOfSpiderWithServerId} from 'states/spider-graph/utils';
import act from 'states/act';
import { user } from 'tools/auth';

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
    /************** prevents race condition on title when deleting spiders ***************/
    const currentOpenSpider = useSelector(state => state.openedSpiders[state.currentSpider]);
    let title;
    if (currentOpenSpider) {
        title = useSelector(state => state.openedSpiders[state.currentSpider].title);
    } else {
        title = 'Loading...';
    }
    /**************************************************************************************** */
    const currentUser = user.data.get ();
    const openedSpiders = useSelector(state => state.openedSpiders);
    const graphId = useSelector(state => state.openedSpiders[state.currentSpider].id);
    const firstGraphId = useSelector(state => {
        if (state.savedSpiders.length > 0) {
            return state.savedSpiders[0].id;
        } else {
            return -1;
        }
    });

    const addNewGraph = () => {
        // add new front template graph to open graphs, switch to that one now
        // call post to add this template to the server, 
        // on POST graph success, set this graph to have the ID in reply from server
        dispatch(act(actions.ADD_GRAPH));

        const serverNewGraph = frontToServer(initSpider(), currentUser.id);

        dispatch(thunks.postGraph(serverNewGraph));
    }

    //TODO finish this deleteGraph function
    //should mirror function in TopBar
    const deleteGraph = e => {
        e.stopPropagation();
        dispatch(act(actions.DELETE_GRAPH, graphId));
        dispatch(thunks.deleteGraph(graphId));

        //open a different graph
        //check if there is a previous spider
        if (firstGraphId >= 0) {
            //if yes, open that spider
            //check if first spider is in openedSpiders
            const openSpiderIndex = getIndexOfSpiderWithServerId(openedSpiders, firstGraphId);
            // if graph is in openedSpiders, open it locally, else call server get and open it locally
            if (openSpiderIndex >= 0){
                dispatch(act(actions.OPEN_GRAPH, firstGraphId));
            } else {
                dispatch(act(actions.OPEN_GRAPH, firstGraphId));
                dispatch(thunks.getGraph(firstGraphId));
            }
        } else {
            //if no, open new default spider (addSpider)
            addNewGraph();
        }
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
