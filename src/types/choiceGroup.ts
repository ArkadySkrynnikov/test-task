import { Dispatch, SetStateAction } from 'react';

export interface choiceGroupWrapperProps {
  value: currencyInChart;
  setValue: Dispatch<SetStateAction<currencyInChart>>;
}

export type choiceGroupItem = {
  moneyType: '$' | '€' | '¥';
}

export type currencyInChart = "USD" | "EUR" | "YUAN";


export interface moneySymbols {
  USD: '$';
  EUR: '€';
  YUAN: '¥';
}

export interface IMoney {
  USD: 'Курс доллара';
  EUR: 'Курс евро';
  YUAN: 'Курс юаня';
}