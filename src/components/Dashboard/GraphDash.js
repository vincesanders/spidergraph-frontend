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
    /* background: #FAFAFA;
    border-radius: 5px;
    position: absolute;
    left: 25px;
    right: 495px;
    top: 147px;
    bottom: 180px;
    border-radius: 25px;
    width: 920px;
    height: 695px; */
`


function GraphDash() {
    return (
        <GraphField>
            <Radar data={data} />
        </GraphField>
    );
}

export default GraphDash;