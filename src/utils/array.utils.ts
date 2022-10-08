/**
 * Binary search function, given an element and a sorted array.
 * @param arr sorted array of T-type elements
 * @param el T-type element
 * @param callbackGetValueFn: callback function to get the value of an object. If the object is primitive-typed, just provide the identity function
 * @return index where `el` is/should be in `arr`
 */
export function binarySearch<T, U>(
  arr: Array<T>,
  el: T,
  callbackGetValueFn: (a: T) => U
): number {
  let start: number = 0;
  let end: number = arr.length - 1;
  let middle: number;
  let middleValue, elValue: U;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    middleValue = callbackGetValueFn(arr[middle]);
    elValue = callbackGetValueFn(el);
    // right place
    if (end - start <= 1 || middleValue === elValue) return middle;
    // look on the right side of the array
    else if (middleValue < elValue) start = middle - 1;
    // look on the other side
    else end = middle + 1;
  }
  return -1;
}
