import React, { useState, useEffect } from 'react';
import { Radar } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from 'states/spider-graph';
import act from 'states/act';

let initialRender = true;

function GraphDash() {
  const dispatch = useDispatch();
  const savedSpiders = useSelector(state => state.savedSpiders);
  const spider = useSelector(state => state.openedSpiders[state.currentSpider]);
  const [data, setData] = useState(spider);
  const [forceRender, setForceRender] = useState(0)

  //if there are savedSpiders on users account,
  //opens the first spider
  if (initialRender) {
    if (savedSpiders.length > 0) {
      dispatch(act(actions.OPEN_GRAPH, 0));
    }
    initialRender = false;
  }

  useEffect(() => {
    setForceRender(forceRender + 1);
    setData(spider);
  }, [spider, spider.labels.length])

  const theme = useSelector(state => state.openedSpiders[state.currentSpider].theme);

  return (
    <div>
      <div style={{height: '20px'}}></div>
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
    </div>
  );
}

export default GraphDash;