export type currencySymbol = '$' | '€' | '¥';

export interface currency {
  symbol: currencySymbol;
  abbr: 'USD' | 'EUR' | 'YUAN';
  translation: 'Курс доллара' | 'Курс евро' | 'Курс юаня';
}
