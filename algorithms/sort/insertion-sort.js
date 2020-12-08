// Insertion sort

const arr = [5, 12, 65, 0, -5, 120, 1600, 1, 0.5, 3.96];

function insertionSort(arr) {
  let pointer = 1;
  while (pointer < arr.length) {
    while (arr[pointer] < arr[pointer - 1]) {
      [arr[pointer - 1], arr[pointer]] = [arr[pointer], arr[pointer - 1]];
      pointer--;
    }
    pointer++;
  }
  return arr;
}

console.log(insertionSort(arr));
