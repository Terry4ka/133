function getData(keys, data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
      let object = {};
      for (let j = 0; j < keys.length; j++) {
        if (data[i][j] !== undefined) {
          object[keys[j]] = data[i][j];
        }
      }
      result.push(object);
    }
    return result;
  }

let keys = ['имя', 'любимый цвет', 'любимое блюдо'];
let data = [['Соня', 'синий', 'рыба'],
            ['Веня'],
            ['Керри', 'белый', 'креветки', '4', 'Черное']]; 

console.log(getData(keys, data));