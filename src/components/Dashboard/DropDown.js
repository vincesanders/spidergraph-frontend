import React from 'react';
import styled from 'styled-components';

export default (props) => {
    const DropDownContent = styled.div`
        /* display: none; */
        position: absolute;
        top: 30px;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px 16px;
        z-index: 1;
        display: ${props.active ? 'block' : 'none'};
        color: black;
    `

    const DropDownClickaway = styled.div`
        position: absolute;
        top: -40px;
        left: -150px;

        background-color: none;
        min-width: 90vw;
        min-height: 90vh;
        z-index: -1;
    `

        const SavedGraphItem = (props) => {
            const SavedGraphItemStyle = styled.div`
                border: 1px solid black;
                padding: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: ${props.opened ? 'cyan' : 'white'};
            `
            return(
                <SavedGraphItemStyle onClick={(event) => props.openGraph(event, props.graphId)}>{props.content}</SavedGraphItemStyle>
            )
        }

        return(
            <DropDownContent>
                <DropDownClickaway/>
                {props.savedGraphs.map((graph, index) => (
                    <SavedGraphItem key={index} content={graph.title} opened={graph.active} graphId={graph.id} openGraph={props.openGraph}/>
                ))}
            </DropDownContent>
        )
}