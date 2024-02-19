import React, { ReactElement, useEffect, useState } from 'react';
import { getData } from './api/getData';
import { DataItem } from './types/data';
import ChoiceGroupWrapper from './components/ChoiceGroupWrapper/ChoiceGroupWrapper';
import { currency } from './types/choiceGroup';
import { currencies } from './consts/currencies';
import ReactEChartsWrapper from './components/ReactEChartsWrapper/ReactEChartsWrapper';
import './app.css';
import { Card } from '@consta/uikit/Card';

/**
 * Родительский компонент. Здесь выполняется получение данных.
 * @returns {ReactElement}
 */
function App(): ReactElement {
  const [data, setData] = useState<DataItem[] | undefined>([]);
  const [dollarData, setDollarData] = useState<DataItem[]>([]);
  const [euroData, setEuroData] = useState<DataItem[]>([]);
  const [yuanData, setYuanData] = useState<DataItem[]>([]);

  const [selectedCurrency, setSelectedCurrency] = useState<currency>(
    currencies[0]
  );

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getData();
        setData(res);
        setDollarData(res.filter((elem) => elem.indicator === 'Курс доллара'));
        setEuroData(res.filter((elem) => elem.indicator === 'Курс евро'));
        setYuanData(res.filter((elem) => elem.indicator === 'Курс юаня'));
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    }
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="app">
      {data!.length ? (
        <Card
          className="app-container"
          horizontalSpace={'xs'}
          verticalSpace={'xs'}
        >
          <header className="app_header">
            <span className="app_header-title">
              {`${selectedCurrency.translation.toUpperCase()}, ${selectedCurrency.symbol}/₽`}
            </span>
            <ChoiceGroupWrapper
              value={selectedCurrency}
              setValue={setSelectedCurrency}
            />
          </header>
          <section className="app_info">
            <ReactEChartsWrapper
              selectedCurrency={selectedCurrency}
              dollarData={dollarData}
              euroData={euroData}
              yuanData={yuanData}
            />
          </section>
        </Card>
      ) : (
        <span className={'app_loading'}>Loading...</span>
      )}
    </div>
  );
}

export default App;
