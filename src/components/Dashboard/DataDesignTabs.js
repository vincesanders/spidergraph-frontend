import React, {useState} from 'react';
import styled from 'styled-components';
import DataTable from './DataTable';
import DesignTable from './DesignTable';

const TabGroup = styled.div`
    border-bottom: 3px solid #DDDDDD;
`

const DataDesignTabs = () => {
    const [tab, setTab] = useState(1);

    return(
        <div>
            <TabGroup>
                <Tab content='Data' action={setTab} tabId={0} activeTab={tab}/>
                <Tab content='Design' action={setTab} tabId={1} activeTab={tab}/>
            </TabGroup>
            {tab === 0 
            ? <DataTable />
            : <DesignTable />
            }
            
        </div>
    )
}

const Tab = (props) => {
    const TabStyled = styled.button`
        width: 50%;
        height: 5rem;
        background: #FFFFFE;
        border: none;
        border-top-left-radius: 5px;
        border-Top-right-radius: 5px;

        ${props.activeTab === props.tabId 
        ? 'background: #4054B2; color: white;' 
        : 'background: none; color: grey;'}

        &:hover{
            box-shadow: inset 0px 0px 0px 1px #7282cc;
        }
    `

    return (
        <TabStyled onClick={() => props.action(props.tabId)}>
            {props.content}
        </TabStyled>
    )

}

export default DataDesignTabs;


