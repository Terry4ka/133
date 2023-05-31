function getPrice(hours, isUrgent) {
    let stavka = 1500;
    let price = hours * stavka; 
  
    if (isUrgent) {
      price = (hours / 2) * (stavka * 2.5); 
    } 
    if (hours > 150) {
      stavka -= 250;
    }  
    return price;
  }
  
  let hours = 200;
  let isUrgent = true;
  let price = getPrice(hours, isUrgent); 
  alert('Стоимость проекта: ' + price);