// Bubble Sort

const arr = [5, 12, 65, 0, -5, 120, 1600, 1, 0.5, 3.96];

let bubbleSort = (inputArr) => {
  let len = inputArr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        [inputArr[i], inputArr[i + 1]] = [inputArr[i + 1], inputArr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return inputArr;
};

console.log(bubbleSort(arr));
