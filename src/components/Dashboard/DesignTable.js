import React, {useState} from 'react';
import styled from 'styled-components';
// import {useSelector, useDispatch} from 'react-redux';
// import actions from '../../states/spider-graph/actions';

const DesignCont = styled.div`
    padding: 0 20px;
`

const H4 = styled.h4`
    color: #4054B2;
    margin-top: 30px;

`
const ThemeButtonsDiv = styled.div`
    display: flex;
    flex-direction: column;
`

const ThemeButton = styled.button`
    margin-top: 30px;
`

const GridScaleButton = styled.button`
    margin-top: 30px;
`
const GridScaleSpan = styled.span`

`

const DesignTable = (props) => {
    // const dispatch = useDispatch();
    // const notes = useSelector(state => state.spiders[state.currentSpider].notes);

    // const handleChange = e => {
    //     dispatch({type: actions.EDIT_GRAPH_NOTES, payload: e.target.value})
    // }
    
    return(
        <DesignCont>
            <H4>Themes</H4>
            <ThemeButtonsDiv>
                <ThemeButton>Cool Theme</ThemeButton>
                <ThemeButton> Warm Theme</ThemeButton>
                <ThemeButton>Gray Theme</ThemeButton>
            </ThemeButtonsDiv>

            <H4>GridScale</H4>
            <GridScaleButton>+</GridScaleButton>
            <GridScaleSpan> 10 </GridScaleSpan>
            <GridScaleButton>-</GridScaleButton>
        </DesignCont>
    )
}

export default DesignTable;