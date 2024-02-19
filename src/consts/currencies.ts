import { currency } from '../types/choiceGroup';

/*
В этой константе хранятся доступные для выбора валюты внутри
компонентов App.tsx(currencies[0] используется для того чтобы изначально
отображался график доллара и кнопка доллара была активна в
choiceGroup.tsx).
 */

export const currencies: currency[] = [
  {
    symbol: '$',
    abbr: 'USD',
    translation: 'Курс доллара',
  },
  {
    symbol: '€',
    abbr: 'EUR',
    translation: 'Курс евро',
  },
  {
    symbol: '¥',
    abbr: 'YUAN',
    translation: 'Курс юаня',
  },
];
