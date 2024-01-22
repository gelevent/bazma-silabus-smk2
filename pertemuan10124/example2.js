const fs = require('fs')
const readline = require("readline")
const {json} = require('stream/consumers')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Cek folder, ada atau tidak jika ada maka buatkan fodernya
const directary = './db';
if (!fs.existsSync(directary)) {
    fs.mkdirSync(directary)
}

// cek file, ada atau tidak, jika tidak ada maka buatkan filenya
const checkFile = './db/data.json'
if (!fs.existsSync(checkFile)) {
    fs.writeFileSync(checkFile, '[]', 'utf-8')
}

const questionExample = (pertanyaan) => {
    return new Promise((resolve, rejects) => {
        rl.question(pertanyaan, (jawaban) => {
            resolve(jawaban)
        })
     })
}

const addData = async () => {
    const nama = await questionExample("Masukan nama anda : ");
    const umur = await questionExample("Masukan umur sekarang : ");
    const hobi = await questionExample("Masukan 1 hobi anda : ");

    const data = { nama, umur, hobi };
    const fileDb = fs.readFileSync('./db/data.json', 'utf-8');
    const dataDiri = JSON.parse(fileDb);

    dataDiri.push(data);
    fs.writeFileSync('./db/data.json', JSON.stringify(dataDiri))
    console.log("Terima kasih sudah memperkenalkan dirinya ")
    rl.close()
}

addData();