function cetakPersegiPanjang(panjang, lebar) {
    for (let i = 0; i < lebar; i++) {
        let baris = '';
        for (let j = 0; j < panjang; j++) {
            baris += '* ';
        }
        console.log(baris);
    }
}
module.exports = cetakPersegiPanjang