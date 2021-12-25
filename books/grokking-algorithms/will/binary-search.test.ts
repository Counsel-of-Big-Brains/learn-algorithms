import { binarySearch, binarySearchFn } from './binary-search';
import { ascendingComparator } from './comparator';

describe('binarySearch', () => {
  it('can search for primitive values', () => {
    const arr: Array<number> = [1, 3, 5, 7, 9, 11, 13, 15, 17];

    for (const value of arr) {
      const result = binarySearch(arr, value);
      const expectedIndex = arr.indexOf(value);
      expect(result).toEqual(expectedIndex);
    }
  });
});

describe('binarySearchFn', () => {
  it('accepts a comparator', () => {
    type Person = { id: number; name: string; };
    const arr: Array<Person> = [
      { id: 3, name: 'John Doe' },
      { id: 4, name: 'Jane Doe' },
      { id: 8, name: 'John Deere' },
      { id: 10, name: 'Jane Smith' },
      { id: 15, name: 'Peter Parker' },
      { id: 19, name: 'Peter Piper' },
    ];
    const find = arr[2];
    const result = binarySearchFn(arr, (p: Person) => ascendingComparator(find.id, p.id));
    const expectedIndex = arr.indexOf(find);
    expect(result).toEqual(expectedIndex);
    expect(arr[result]).toHaveProperty('name', find.name);
  });
});
