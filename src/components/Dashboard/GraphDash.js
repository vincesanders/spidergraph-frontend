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

  console.log('graphs spider');
  console.log(spider);

  useEffect(() => {
    console.log('!!!!!!!! graph got new spider: ');
    console.log(spider);
    setForceRender(forceRender + 1);
    setData(spider);
  }, [spider, spider.labels.length])

  const theme = useSelector(state => state.openedSpiders[state.currentSpider].theme);

  useEffect(() => {
    let clone = spider
    if(theme === 2){
      if(clone.datasets[0]){
        clone.datasets[0].backgroundColor = 'rgba(112, 111, 211, .5)';
            if(clone.datasets[1]){
            clone.datasets[1].backgroundColor = 'rgba(51, 217, 178, .5)';
                if(clone.datasets[2]){
                clone.datasets[2].backgroundColor = 'rgba(52, 172, 224, .5)';
                    if(clone.datasets[3]){
                    clone.datasets[3].backgroundColor = 'rgba(33, 140, 116, .5)';
                    }
                }
            }  
        }

    }
    if(theme === 3){
      if(clone.datasets[0]){
        clone.datasets[0].backgroundColor = 'rgba(255, 121, 63, .5)';
            if(clone.datasets[1]){
            clone.datasets[1].backgroundColor = 'rgba(255, 218, 121, .5)';
                if(clone.datasets[2]){
                clone.datasets[2].backgroundColor = 'rgba(255, 177, 66, .5)';
                    if(clone.datasets[3]){
                    clone.datasets[3].backgroundColor = 'rgba(255, 82, 82, .5)';
                    if(clone.datasets[4]){
                        clone.datasets[4].backgroundColor = 'rgba(179, 57, 57, .5)';
                        if(clone.datasets[5]){
                            clone.datasets[5].backgroundColor = 'rgba(255, 82, 82, .5)';
                            }
                        }
                    }
                }
            }  
        }
    }
    if(theme === 4){
      if(clone.datasets[0]){
        clone.datasets[0].backgroundColor = 'rgba(197, 197, 205, 0.5)';
            if(clone.datasets[1]){
            clone.datasets[1].backgroundColor = 'rgba(13, 17, 36, 0.5)';
                if(clone.datasets[2]){
                clone.datasets[2].backgroundColor = 'rgba(234, 234, 234, 0.5)';
                    if(clone.datasets[3]){
                    clone.datasets[3].backgroundColor = 'rgba(234, 234, 234, 0.7)';
                    if(clone.datasets[4]){
                        clone.datasets[4].backgroundColor = 'rgba(234, 234, 234, 0.3)';
                        if(clone.datasets[5]){
                            clone.datasets[5].backgroundColor = 'rgba(197, 197, 205, 0.5)';
                            }
                        }
                    }
                }
            }  
        }
    }
    console.log(theme,'new theme: ');
  },[theme,spider])


  const chartOptions = {
    scale: {
      gridLines: {
        circular: true
      }
    }
  }

  return (
    <GraphField>
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
    </GraphField>
  );
}

export default GraphDash;