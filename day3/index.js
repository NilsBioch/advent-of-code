const fs = require('fs');

var data = fs.readFileSync('input.txt').toString().split("\n");
var gammaValPos = 0;
var gammaValNeg = 0;
var gammaBinary = '';
var gammaEpsilon = '';
for (let b = 0; b < data.length; b++) {
    data[b] = data[b].split('');
}

for (let a = 0; a < data[a].length; a++) {
    gammaValPos = 0;
    gammaValNeg = 0;
    for (let i = 0; i < data.length; i++) {
        var number = parseInt(data[i][a]);
        if(number == 1){
            gammaValPos++;
        }else{
            gammaValNeg++;
        }
    }
    if(gammaValPos > gammaValNeg){
        gammaBinary = gammaBinary + 1;
        gammaEpsilon = gammaEpsilon + 0;
    }else{
        gammaBinary = gammaBinary + 0;
        gammaEpsilon = gammaEpsilon + 1;
    }
}
console.log(parseInt(gammaBinary, 2) * parseInt(gammaEpsilon, 2));