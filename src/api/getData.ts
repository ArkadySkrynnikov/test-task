import { DataItem } from '../types/data';
import axios from 'axios';

// export interface DataItem {
//   date: string;
//   month: string;
//   indicator: string;
//   value: number;
// }

export async function getData(): Promise<DataItem[]> {
  try {
    const response = await axios.get<DataItem[]>("https://65d08578ab7beba3d5e34003.mockapi.io/api/mockDataGazprom/mock")
    const data = response.data
    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`error message: ${error.message}`);
    } else {
      throw new Error(`error: ${error}`);
    }
  }
}