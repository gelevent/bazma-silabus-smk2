// Synchronous
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

// Asynchronous
const getKelas = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kelas = id === 1 ? "SIJA" : "RPL";
            resolve({ id, kelas });
        }, 1000); // Menambahkan penundaan 1 detik untuk mensimulasikan operasi asynchronous
    });
};

// Jika id = 1, maka datanya adalah SIJA
getKelas(1)
    .then((kelasSija) => {
        console.log(kelasSija);
    })
    .catch((error) => {
        console.error(error);
    });

// Jika id selain = 1, maka datanya adalah RPL
getKelas(2)
    .then((kelas) => {
        console.log(kelas);
    })
    .catch((error) => {
        console.error(error);
    });

// Promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        // Simulasi operasi asynchronous
        setTimeout(() => {
            const success = true;

            if (success) {
                resolve('Data berhasil diambil');
            } else {
                reject('Terjadi kesalahan saat mengambil data');
            }
        }, 1000);
    });
};

fetchData()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });