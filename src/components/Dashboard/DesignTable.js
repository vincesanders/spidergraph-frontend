import React, { useState } from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import actions from 'states/spider-graph/actions';

//DESIGNS ARE AT THE BOTTOM OF THIS COMPONENT FOR EASE OF ACCESS// EXPORT DEFAULT STILL AT VERY BOTTOM

const DesignTable = (props) => {
    const dispatch = useDispatch();

    const handleChange = e => {
        dispatch({ type: actions.EDIT_GRAPH_NOTES, payload: e.target.value })
    }
    const currentSpider = useSelector(state => state.currentSpider);
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
    return (
        <DesignCont>
            <H4>Themes</H4>
            <ThemeButtonsDiv>
                <ThemeButton onClick={handleCool}>
                    <ColorBoxContainer>
                        <ColorBox style={{background: '#706FD3'}} /> <ColorBox style={{background: '#33D9B2'}} /> <ColorBox style={{background: '#34ACE0'}} /> <ColorBox style={{background: '#218C74'}} /> <ColorBoxBlack />
                    </ColorBoxContainer>
                    <ThemeText >Cool Theme</ThemeText>
                </ThemeButton>
                <ThemeButton>
                    <ColorBoxContainer>
                        <ColorBox style={{background: '#FF793F'}} /> <ColorBox style={{background: '#FFDA79'}} /> <ColorBox style={{background: '#FFB142'}} /> <ColorBox style={{background: '#FF5252'}} /> 
                        <ColorBox style={{background: '#B33939'}} /> <ColorBoxBlack style={{margin:'15px 15px 15px 33%'}} />
                    </ColorBoxContainer>
                    <ThemeText>Warm Theme</ThemeText>
                </ThemeButton>
                <ThemeButton style={{margin: '30px 0px'}}>
                    <ColorBoxContainer>
                    <ColorBox style={{background: '#C5C5CD'}} /> <ColorBox style={{background: 'rgba(13, 17, 36, 0.5)'}} /> <ColorBox style={{background: '#EAEAEA'}} /> <ColorBox style={{background: '#EAEAEA'}} /> 
                    <ColorBox style={{background: '#EAEAEA'}} /> <ColorBoxBlack style={{margin:'15px 15px 15px 33%'}} />
                    </ColorBoxContainer>
                    <ThemeText>Grey Theme</ThemeText>
                </ThemeButton>
            </ThemeButtonsDiv>

            {/* <H4>GridScale</H4>
            <GridScaleButton>+</GridScaleButton>
            <GridScaleSpan> 10 </GridScaleSpan>
            <GridScaleButton>-</GridScaleButton> */}
        </DesignCont>
    )
}

const ColorBox = styled.div`
    height: 45px;
    width: 45px;
    border-radius: 5px;
    margin: 15px;
`
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

const ThemeButton = styled.div`
    margin-top: 30px;
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 4px;
`

const ColorBoxContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    padding: 1%`


const ColorBoxBlack = styled.div`
    height: 45px;
    width: 45px;
    background: #0D1124;
    border-radius: 5px;
    margin: 15px;
    margin-left: 45%;
`

const ThemeText = styled.div`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 38px;
margin-left: 15px;
padding: 1%;
color: #C5C5CD;`


export default DesignTable;
