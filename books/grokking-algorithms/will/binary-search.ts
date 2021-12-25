import { Comparator1, ascendingComparator } from './comparator';

export const binarySearchFn = <T>(
  arr: Array<T>,
  comparator: Comparator1<T>,
): number => {
  let left: number = 0;
  let right: number = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const comparison = comparator(arr[mid]);

    if (comparison < 0) {
      right = mid - 1;
    } else if (comparison > 0) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
};

export const binarySearch = <T>(
  arr: Array<T>,
  value: T,
): number => {
  return binarySearchFn(arr, (el: T) => ascendingComparator(value, el));
};
