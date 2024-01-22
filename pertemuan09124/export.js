const { kelasBaru, getKelasAsync }  = require("./arsitektur.js");

console.log(kelasBaru(1));

getKelasAsync(1)
    .then((kelasSija) => {
        console.log(kelasSija);
    });