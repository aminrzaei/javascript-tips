// Counting Sort

const arr = [1, 5, 5, 9, 4, 6, 2, 1, 1, 3, 5, 7, 8, 9, 7, 2];

let countingSort = (arr, min, max) => {
  let i = min;
  let j = 0;
  let len = arr.length;
  let count = [];

  for (i; i <= max; i++) {
    count[i] = 0;
  }
  for (i = 0; i < len; i++) {
    count[arr[i]] += 1;
  }
  console.log(count);
  for (i = min; i <= max; i++) {
    while (count[i] > 0) {
      arr[j] = i;
      j++;
      count[i]--;
    }
  }
  return arr;
};

console.log(countingSort(arr, 1, 9));
