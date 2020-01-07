import React from 'react';
import styled from 'styled-components'

import TopBar from './TopBar';
import GraphDash from './GraphDash';
import DataDesignTabs from './DataDesignTabs';

const DashboardCont = styled.div`
    background: #ECEEF7;
    height: 100vh;
`

const H2 = styled.h2`
    font-weight: 600;
    font-size: 48px;
    line-height: 167%;
    color: #0D1124; 
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

const Card = styled.div`
    background: #FAFAFA;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
    border-radius: 5px;
    margin-bottom: 10px;
`

const GraphCard = styled(Card)`
    width: 60%;
`

const DataDesignCard = styled(Card)`
    width: 38%;
`

const NotesInput = styled.div`
    background: #FAFAFA;
    width: 60%;
    height: 50px;
`

const ButtonPanel = styled.div`
    background: lightgrey;
    width: 38%;
    height: 50px;
`

const Dashboard = () => {
    return (
        <DashboardCont>
            <TopBar />
            <DashboardBody>
                <H2>Title of Your Spider Chart</H2>
                <CardCont>
                    <GraphCard>
                        <GraphDash />
                    </GraphCard>
                    <DataDesignCard>
                        <DataDesignTabs />
                    </DataDesignCard>
                    <NotesInput>
                        
                    </NotesInput>
                    <ButtonPanel>

                    </ButtonPanel>
                </CardCont>

            </DashboardBody>
            {/* <Graph /> */}
        </DashboardCont>
        
    );
  }

  export default Dashboard;