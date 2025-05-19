// @ts-check
import { readFileSync } from 'fs';


const arrayOfElements = [4, 4, 8, 3, 3, 3, 2, 4, 4]


//Вивести кожен елемент масиву
console.log("Вивести кожен елемент масиву")
for(var i = 0; i<arrayOfElements.length; i++) {
console.log(arrayOfElements[i])
}


//Вивести перші 3 елементи масиву
console.log("Вивести перші 3 елементи масиву")
for(var i = 0; i<3; i++) {
console.log(arrayOfElements[i])
}


//Вивести суму всіх елементів масиву
console.log("Вивести суму всіх елементів масиву")
var sum = 0;
for (var i = 0; i < arrayOfElements.length; i++) {
  sum += arrayOfElements[i];
}
console.log('Сума всіх елементів масиву =', sum)


//Вивести суму всіх елементів масиву, окрім елементів що = 4
console.log("Вивести суму всіх елементів масиву, окрім елементів що = 4")
var sum = 0;
for (var i = 0; i < arrayOfElements.length; i++) {
  if (arrayOfElements[i] !== 4) {
    sum += arrayOfElements[i];
  }
}
console.log('Сума всіх елементів масиву без 4 =', sum)