const fs = require('fs');

var data = fs.readFileSync('input.txt').toString().split("\n");
var num 
var x = 0;
var y = 0;
var aim = 0;


for (let i = 0; i < data.length; i++) {
    data[i] = data[i].split(' ');
    var direction = data[i][0];
    var number = parseInt(data[i][1]);
    if(direction == 'forward'){
        x = x + number
        y = (aim * number) + y;
    }else if(direction == 'up'){
        aim = aim - number;
    }else{
        aim = aim + number;
    }
    console.log(number)
}
    console.log(x * y);
    




