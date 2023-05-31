function getSortedArray(arr, key) {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j][key] < arr[minIndex][key]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
    return arr;
  }

let arr = [
    { name: 'Кики', age: 3 },
    { name: 'Буся', age: 6 },
    { name: 'Лиза', age: 10 },
];
  
let sortedArr = getSortedArray(arr, 'age');
  
console.log(sortedArr);