import React from 'react';
import styled from 'styled-components'

import TopBar from './TopBar';
import TitleInput from './TitleInput';
import GraphDash from './GraphDash';
import DataDesignTabs from './DataDesignTabs';
import NotesInput from './NotesInput';
import ExportButtonsPanel from './ExportButtonsPanel';

const DashboardCont = styled.div`
    background: #ECEEF7;
    height: 100vh;
`

const DashboardBody = styled.div`
    margin: 10px 20px;
`
const CardCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* height: 80vh; */
`

const Row = styled.div`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    margin-bottom: 20px;
`

const Card = styled.div`
    background: #FAFAFA;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
    border-radius: 5px;
`

const GraphCard = styled(Card)`
    width: 60%;
`

const DataDesignCard = styled(Card)`
    width: 38%;
`

const NotesDiv = styled.div`
    width: 60%;
`

const ButtonPanel = styled.div`
    width: 38%;
`

const Dashboard = () => {
    return (
        <DashboardCont>
            <TopBar />
            <DashboardBody>
                <TitleInput />
                <CardCont>
                    <Row>
                        <GraphCard>
                            <GraphDash />
                        </GraphCard>
                        <DataDesignCard>
                            <DataDesignTabs />
                        </DataDesignCard>
                    </Row>
                    <Row>
                        <NotesDiv>
                            <NotesInput />
                        </NotesDiv>
                        <ButtonPanel>
                            <ExportButtonsPanel />
                        </ButtonPanel>
                    </Row>
                </CardCont>
            </DashboardBody>
            {/* <Graph /> */}
        </DashboardCont>
        
    );
  }

  export default Dashboard;