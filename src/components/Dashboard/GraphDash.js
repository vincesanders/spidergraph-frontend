import React from 'react';
import styled from 'styled-components'
import { Radar } from 'react-chartjs-2';
import {useSelector} from 'react-redux';

const GraphField = styled.div`
    
`

function GraphDash() {
  const spider = useSelector(state => state.openedSpiders[state.currentSpider]);
  console.log(spider);

  return (
    <GraphField>
      <Radar
        data={spider}
        options={{
          legend: { display: true, position: 'bottom', align: 'start' }
        }} />
    </GraphField>
  );
}

export default GraphDash;