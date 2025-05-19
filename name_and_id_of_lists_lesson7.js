// @ts-check
import { readFileSync } from 'fs';

var body = readFileSync('lists_lesson7.json', 'utf8');
const data = JSON.parse(body);

for(var i = 0; i<data.lists.length; i++) {
console.log(i)     
console.log(`name is ${data.lists[i].name} and id is ${data.lists[i].id}`)
}