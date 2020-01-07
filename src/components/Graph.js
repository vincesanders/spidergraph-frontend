import React from 'react';
import styled from 'styled-components'
import {Radar} from 'react-chartjs-2';

const data = {
    labels: ["Cat1", "Cat2", "Cat3", "Cat4", "Cat5",],
    datasets: [
      {
        label: "Sample Chart",
        backgroundColor: "rgba(255, 82, 82, 0.5)",
        borderColor: "rgba(255, 82, 82, 0.5)",
        borderWidth: '2',
        data: [10, 11, 12, 13, 14,],
        legend: {position: 'bottom',
    }
      }

    ]
  };

  

  const GraphField = styled.div`
    background: #FAFAFA;
    border-radius: 5px;
    position: absolute;
    left: 25px;
    right: 495px;
    top: 147px;
    bottom: 180px;
    border-radius: 25px;
    width: 920px;
    height: 695px;`;

  const H2 = styled.h2`
    position: absolute;
    left: 1.67%;
    right: 34.44%;
    top: 6.74%;
    bottom: 87.5%;
    width:  920px;

    /* H1 Text */

    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 167%;

    color: #0D1124;
  `

  const Topbar = styled.div`
    position: absolute;
    left: 24px;
    right: 0%;
    top: 63px;
    bottom: 94.53%;
    width: 100%;
    height: 56px;

    background: #4054B2;`

  const Design = styled.div`
    position: absolute;
    left: 968px;
    right: 24px;
    top: 147px;
    bottom: 179px;
    width: 448px;
    height: 696px;
    

    /* Surface — Card */

    background: #FAFAFA;
    border-radius: 5px;`

    const GraphPage = styled.div`
    background: #E5E5E5;
    `
  
  function Graph() {
    return (
        <GraphPage>

        <Topbar>
        </Topbar>
        <H2>Title of Your Spider Chart</H2>
          <GraphField>
            <Radar data={data} />
          </GraphField>
          <Design>

          </Design>
        </GraphPage>
        
    );
  }

  export default Graph;