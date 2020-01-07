import React from 'react';
import styled from 'styled-components';

const Panel = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
`

const Button = styled.button`
    border: 1px solid #4054B2;
    border-radius: 5px;

    margin-bottom: 10px;
    width: 47%;
    height: 4rem;
    outline: none;
`

const CopyUrlButton = styled(Button)`
    background: white;   
`

const DownloadButton = styled(Button)`
    background: #4054B2;
`

const ExportButton = styled(Button)`
    background: none;
`

const PngDiv = styled.div`
    margin-bottom: 10px;
    width: 47%;
`

const ExportButtonsPanel = (props) => {
    return(
        <Panel>
            <CopyUrlButton>Copy URL</CopyUrlButton>
            <DownloadButton>Download</DownloadButton>
            <PngDiv>PNG</PngDiv>
            <ExportButton>Export</ExportButton>
        </Panel>
    )
}

export default ExportButtonsPanel;