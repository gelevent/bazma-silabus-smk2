// Soal 1
const funcNameKelas = (kode, namaKelas) => {
    return { kode, namaKelas }
}

const getNameKelas = (id) => {
    const getName = id === 1 ? funcNameKelas("SIJA", "Sistem Informasi Jaringan & Aplikasi") : id === 2 ? funcNameKelas("RPL", "Rekayasa Perangkat Lunak") : funcNameKelas("MM", "Multimedia")
    return { id, getName }
}

const getDataNamaKelas = getNameKelas(1)
console.log(getDataNamaKelas)
const getDataNamaKelas2 = getNameKelas(2)
console.log(getDataNamaKelas2)
const getDataNamaKelas3 = getNameKelas(3)
console.log(getDataNamaKelas3)

// soal 2
const getKelas = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kelas =
                id === 1 ? "SIJA" :
                "RPL"
            resolve({ id, kelas });
        }, 1000);
    });
}

getKelas(1)
    .then((kelasSija) => {
        console.log(kelasSija);
    })
    .catch((error) => {
        console.error(error);
    });

getKelas(2)
    .then((kelas) => {
        console.log(kelas);
    })
    .catch((error) => {
        console.error(error);
    });

// soal 3
const getClassName = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kelas =
                id === 1 ? "SIJA" :
                id === 2 ? "RPL" :
                "MM";
            resolve({ id, kelas });
        }, 1000);
    });
}

getClassName(1)
    .then((kelasSija) => {
        console.log(kelasSija);
    })
    .catch((error) => {
        console.error(error);
    });

getClassName(2)
    .then((kelas) => {
        console.log(kelas);
    })
    .catch((error) => {
        console.error(error);
    });

getClassName(3)
    .then((mulmed) => {
        console.log(mulmed);
    })
    .catch((error) => {
        console.error(error);
    });