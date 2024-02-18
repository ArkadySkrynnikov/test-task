import React, { ReactElement, useEffect, useState } from 'react';
import { getData } from './api/getData';
import { DataItem } from './types/data';
import ChoiceGroupWrapper from './components/ChoiceGroupWrapper/ChoiceGroupWrapper';
import { ReactECharts } from './components/Echarts/ReactECharts';
import { currencyInChart } from './types/choiceGroup';


function App(): ReactElement {
  const [data, setData] = useState<DataItem[] | undefined>([])

  const [error, setError] = useState<string | null>(null)

  const [currentMoney, setCurrentMoney] = useState<currencyInChart>("USD")
  console.log(currentMoney)

  const [option, setOption] = useState({
    xAxis: {
      type: 'category',
      data: ['A', 'B', 'C']
    },
    tooltip: {},
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150],
        type: 'line'
      }
    ]
  })

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setData(data);
      } catch (error : unknown) {
        if (error instanceof Error) {
          setError(error.message)
        }
      }
    }
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div>
        {/*{data!.length > 1 ? data?.map(e=><div>{e.value}</div>) : <span>Loading</span>}*/}
        <ChoiceGroupWrapper value={currentMoney} setValue={setCurrentMoney}/>
        <div style={{width:500, height:500}}>
          <ReactECharts option={option} />
        </div>
      </div>
    </>
  );
}

export default App;
