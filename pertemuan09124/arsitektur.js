const getKelas = (kode) => {
    const Kelas = kode === 1 ? "SIJA" : "RPL";
    return { kode, Kelas };
}


// cara 2 dengan menambahkan kepanjangan dari kode kelas
const functionKelas = (kode, deskripsi, kelas) => {
    return { kode, deskripsi, kelas };
}
const getKelasDeskipsi = (kodeid) => {
    const kelas = kodeid === 1 ? functionKelas("SIJA", "Sistem informasi jaringan aplikasi", 11) : functionKelas("RPL", "Rekayasa Perangkat Lunak", 12)
return {kodeid, kelas}
}

// buatlah 5 data object bentuk item game
const functionGame = (game, hero, damage, items, type) => {
    return { game, hero, damage, items, type };
}
const getGameItem = (item) => {
    const itemGame = item === 1 ? functionGame("Mobile Legend", "Franco", "2000", "Imortal", "Tank") : functionGame("ML", "Yin", "2000", "hunter strike", "figter" )
    return {item, itemGame}
}


const classFunc = (id) => {
    return { kode, namaKelas };
}
const kelasBaru = (id) => {
    if (id === 1) {
        return classFunc("SIJA", "Sistem Informasi jaringan dan Aplikasi");
    } else if (id === 2) {
        return classFunc("RPL", "Rekayasa Perangkat Lunak");
    } else if (id === 3) {
        return classFunc("MM", "Multimedia");
    }
    return { id };
}

// async
// const getKelasAsync = async (kodeId) => {
//     const kelas = kodeId === 1 ? "SIJA" : "RPL"
//     const data = await kelas;
//     return { kodeId, kelas };
// }
// getKelasAsync(1).then(console.log)

const getKelasAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kelas = id === 1 ? "SIJA" : "RPL";
      resolve({ id, kelas });
    }, 3000); 
  });
};

module.exports = {
    getKelasAsync,
    getKelas,
    getKelasDeskipsi,
    getGameItem,
    kelasBaru
};