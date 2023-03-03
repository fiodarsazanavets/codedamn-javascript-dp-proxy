const DataService = require('./dataService.js');

var dataService = new DataService();
dataService.insertData('item 1');
dataService.insertData('item 2');
dataService.insertData('item 3');

var data = dataService.getData();
console.log(`Items retrieved: ${data.length}`);
data = dataService.getData();
console.log(`Items retrieved: ${data.length}`);