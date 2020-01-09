import React, {useState} from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import actions from 'states/spider-graph/actions';

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
    const dispatch = useDispatch();
    const currentSpider = useSelector(state => state.currentSpider);

    // const handleChange = e => {
    //     dispatch({type: actions.EDIT_GRAPH_NOTES, payload: e.target.value})
    // }


    const spider = useSelector(state => state.openedSpiders[currentSpider]);

    const [themedSpider, setThemedSpider] = useState(spider)

    function handleCool(){
        let clone = themedSpider
        if(clone.datasets[0]){
        clone.datasets[0].backgroundColor = 'rgba(112, 111, 211, 1)';
            if(clone.datasets[1]){
            clone.datasets[1].backgroundColor = 'rgba(51, 217, 178, 1)';
                if(clone.datasets[2]){
                clone.datasets[2].backgroundColor = 'rgba(52, 172, 224, 1)';
                    if(clone.datasets[3]){
                    clone.datasets[3].backgroundColor = 'rgba(33, 140, 116, 1)';
                    }
                }
            }  
        }
        clone.theme = 1;

        setThemedSpider(clone)
        console.log(themedSpider)
    }
    console.log(themedSpider, 'current')
    return(
        <DesignCont>
            <H4>Themes</H4>
            <ThemeButtonsDiv>
                <ThemeButton onClick={handleCool}>Cool Theme</ThemeButton>
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
