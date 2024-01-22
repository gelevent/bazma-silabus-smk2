// const names = "Hafith Muhammad Fauzan";
// console.log(names);

// const age = 20;
// const year = 2022;

// const pengurangan = year - age ;
// console.log( pengurangan)

// function dataDiri(nama) {
//     return `Halo nama saya adalah ${nama}`
// }
// console.log(dataDiri("Hafith Muhammad fauzan"))

const { namaRelasi, namaDaerah, sekolah, abjadArr } = require("./relasi")
const {angkaHari} = require("./tugas.js")

console.log(namaRelasi("Hafith MF"))
console.log(namaDaerah("Bogor"))
console.log(sekolah("SMK TI BAZMA", "SIJA"))
console.log(abjadArr())

console.log(angkaHari(5))

