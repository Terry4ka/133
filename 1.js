let groceries = ['чай', 'шпроты', 'печенье', 'сахар', 'чипсы'];
let shoppingList = '';
for(let i = 0; i < groceries.length; i++){
  if(i === 0){
    shoppingList += groceries[i];
  } else {
    shoppingList += ', ' + groceries[i];
  }
}
console.log(shoppingList);