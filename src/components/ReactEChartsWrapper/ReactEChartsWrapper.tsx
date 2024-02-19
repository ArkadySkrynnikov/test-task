import { ReactECharts } from '../Echarts/ReactECharts';
import { currency } from '../../types/choiceGroup';
import { DataItem } from '../../types/data';
import { FunctionComponent, ReactElement } from 'react';
import { averageValue } from '../../utils/averageValue';
import './reactEchartsWrapper.css';

/*
Данный компонент, принимает через пропсы выбранную валюту, и данные по валютам.
На основе выбранной валюты отрисовывет график данных.
 */

interface ReactEChartsWrapperProps {
  selectedCurrency: currency;
  dollarData: DataItem[];
  euroData: DataItem[];
  yuanData: DataItem[];
}

const ReactEChartsWrapper: FunctionComponent<ReactEChartsWrapperProps> = ({
  selectedCurrency,
  dollarData,
  euroData,
  yuanData,
}): ReactElement => {
  function opt() {
    let data: DataItem[] = [];

    switch (selectedCurrency.abbr) {
      case 'USD':
        data = dollarData;
        break;
      case 'EUR':
        data = euroData;
        break;
      case 'YUAN':
        data = yuanData;
        break;
    }

    return {
      grid: {
        left: '50',
        bottom: '50',
        width: '80%',
      },
      xAxis: {
        type: 'category',
        data: data.map((item) => item.month),
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          margin: 20,
        },
      },
      yAxis: {
        type: 'value',
        min: Math.min(...data.map((item) => item.value)),
        max: Math.max(...data.map((item) => item.value)),
        data: data.map((item) => item.value),
        splitLine: {
          lineStyle: {
            type: 'dashed',
          },
        },
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          params = params[0];
          return `
            <span class='tooltip'><strong>${params.axisValue} год</strong></br>
            <span style='display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:orange;'></span> 
            ${data[0].indicator} <strong>${params.value}₽</strong></span>
          `;
        },
      },
      series: [
        {
          data: data.map((item) => item.value),
          type: 'line',
          showSymbol: false,
          lineStyle: {
            color: 'orange',
          },
        },
      ],
      graphic: {
        elements: [
          {
            type: 'text',
            right: 40,
            bottom: 200,
            style: {
              text: 'Среднее за период',
              font: '16px Inter',
              fill: '#667985',
            },
          },
          {
            type: 'text',
            right: 50,
            bottom: 130,
            style: {
              text: averageValue(data),
              font: '48px Inter',
              fill: '#F38B00',
            },
          },
          {
            type: 'text',
            right: 25,
            bottom: 137,
            style: {
              text: '₽',
              font: '20px Inter',
              fill: '#667985',
            },
          },
        ],
      },
    };
  }

  const option = opt();

  return <ReactECharts option={option} />;
};

export default ReactEChartsWrapper;
