const fs = require('fs')
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukan nama lengkap : ', (nama) => {
    rl.question('Masukan umur anda : ', (umur) => {
        rl.question('Masukan nama sekolah : ', (sekolah) => {
            // console.log('-- Data Saya --');
            // console.log(`Nama lengkap saya adalah ${nama} dan umur saya adalah ${umur}, saat ini sekolah di ${sekolah}`)
            
            const data = { nama, umur, sekolah }
            const fileDb = fs.readFileSync('./db/data.json', 'utf8')
            const dataDiri = JSON.parse(fileDb)

            dataDiri.push(data);
            fs.writeFileSync('./db/data.json', JSON.stringify(dataDiri))
            console.log("Terima kasih sudah memperkenalkan dirinya ")
            rl.close()
        })
    })
})