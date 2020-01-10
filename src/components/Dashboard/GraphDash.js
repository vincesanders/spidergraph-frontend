import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Radar } from 'react-chartjs-2';
import {useSelector} from 'react-redux';

const GraphField = styled.div`
    
`

function GraphDash() {
  const spider = useSelector(state => state.openedSpiders[state.currentSpider]);
  const [data, setData] = useState(spider);
  // console.log(spider);
  const [forceRender, setForceRender] = useState(0)

  useEffect(() => {
    // console.log('graph got new spider: ', spider);
    setForceRender(forceRender + 1);
    setData(spider);
  }, [spider, spider.labels.length])

  const chartOptions = {
    scale: {
      gridLines: {
        circular: true
      }
    }
  }

  return (
    <GraphField>
      <Radar
        data={data}
        options={{
          legend: { 
            display: true, 
            position: 'bottom', 
            align: 'start',
          },
          scale: {
            gridLines: { circular: true},
            ticks:{
              suggestedMin: 0,
              // suggestedMax: 10
            },
            dummyKeyThatForcesRerender: forceRender,
          },
        }} />
    </GraphField>
  );
}

export default GraphDash;