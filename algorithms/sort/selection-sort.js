// Selection Sort

const arr = [5, 12, 65, 0, -5, 120, 1600, 1, 0.5, 3.96];

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

const selectionSort = (arr) => {
  // start looping at the beginning of the array.
  for (let i = 0; i < arr.length; i++) {
    // select the element's index at the beginning as the current minimum number.
    let min = i;
    // loop thourgh the array from the next element of the array
    // this will help us in checking only against the unsorted
    // elements, as we know the elements before it are already sorted.
    for (let j = i + 1; j < arr.length; j++) {
      // check if the current element is less than the initial minimum
      // and assign the minimum to be the current element if that's the case.
      if (arr[j] < arr[min]) min = j;
    }
    // at this stage, we are checking if the new minimum index number
    // is not equal to the one we begin with.
    // analyse the code, and you will notice that we are still in the outer loop where i is still 0.
    // which was our initial minimum number value, so after
    // looping through the array again with the inner loop and
    // we found another new minimun number, we are now swapping those 2 values.
    // after that, we repeat the same process until the array is sorted.
    i !== min && swap(arr, i, min);
  }
  return arr;
};

console.log(selectionSort(arr));
