import { DataItem } from '../types/data';
import axios from 'axios';

/**
 * Функция getData делает get запрос через axios на введенный url
 * возвращает DataItem[]. Ошибки обрабатываются через try/catch.
 * @returns {Promise<DataItem[]>}
 */
export async function getData(): Promise<DataItem[]> {
  try {
    const response = await axios.get<DataItem[]>(
      'https://65d08578ab7beba3d5e34003.mockapi.io/api/mockDataGazprom/mock'
    );
    const data = response.data;
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`error message: ${error.message}`);
    } else {
      throw new Error(`error: ${error}`);
    }
  }
}
