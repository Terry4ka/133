let numbers = [5, 3, 8, 1, 4, 2];
for (let i = 0; i < numbers.length - 1; i++) {
  let minIndex = i;
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[j] < numbers[minIndex]) {
      minIndex = j;
    }
  }
  if (minIndex !== i) {
    let temp = numbers[i];
    numbers[i] = numbers[minIndex];
    numbers[minIndex] = temp;
  }
}
let index = numbers.indexOf(4);
if (index !== -1) {
  console.log(`Индекс элемента 4: ${index}`);
} else {
  console.log('Элемент не найден');
}