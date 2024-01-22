const getKelas = (kode) => {
    const Kelas = kode === 1 ? "SIJA" : "RPL";
    return { kode, Kelas };
}
console.log(getKelas(1))

// cara 2 dengan menambahkan kepanjangan dari kode kelas
const functionKelas = (kode, deskripsi, kelas) => {
    return { kode, deskripsi, kelas };
}
const getKelasDeskipsi = (kodeid) => {
    const kelas = kodeid === 1 ? functionKelas("SIJA", "Sistem informasi jaringan aplikasi", 11) : functionKelas("RPL", "Rekayasa Perangkat Lunak", 12)
return {kodeid, kelas}
}

console.log(getKelasDeskipsi(1))

// buatlah 5 data object bentuk item game
const functionGame = (game, hero, damage, item, type) => {
    return { game, hero, damage, item, type };
}
const getGameItem = (item) => {
    const itemGame = item === 1 ? getGameItem("Mobile Legend", "Franco", "2000", "Imortal", "Tank") : getGameItem("ML", "Yin", "2000", "hunter strike", "figter" )
    return {item, itemGame}
}
console.log(getGameItem(1))