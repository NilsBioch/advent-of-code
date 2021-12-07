const fs = require('fs');

var data = fs.readFileSync('input.txt').toString().split("\n").map(Number);

var count = 0;
console.log(data);

for (let i = 0; i < data.length; i++) {
    var val1 = data[i] + data[i+1] + data[i+2];
    var val2 = data[i+1] + data[i+2] + data[i+3];
    if(val2 > val1){
        count++;
    }
}    
console.log(count);
