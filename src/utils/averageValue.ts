import { DataItem } from '../types/data';

export function averageValue(arr: DataItem[]): string {
  return (arr.reduce((acc, e) => acc + e.value, 0) / arr.length).toFixed(1);
}
