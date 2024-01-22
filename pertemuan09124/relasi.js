function namaRelasi(name) {
    return `Hallo my name is ${name}`
}

function namaDaerah(name) {
    return `tempat daerah saya tinggal di ${name}`
}

function sekolah(namasekolah, jurusansekolah) {
    const data = [
        namasekolah,
        jurusansekolah
    ]
    return data;
}

function abjadArr() {
    return ["a", "b", "c", "d"]
}
module.exports = { namaRelasi, namaDaerah, sekolah, abjadArr };