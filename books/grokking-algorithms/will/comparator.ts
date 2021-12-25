export type Comparator<T> = (a: T, b: T) => number;

export type Comparator1<T> = (a: T) => number;

export const ascendingComparator = <T>(a: T, b: T): number => {
  if (a < b) return -1;
  if (b < a) return 1;
  return 0;
};

export const descendingComparator = <T>(a: T, b: T): number => {
  if (a < b) return 1;
  if (b < a) return -1;
  return 0;
};
