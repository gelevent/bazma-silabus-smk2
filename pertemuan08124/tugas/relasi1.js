const funcDay = (id, namaHari) => {
    return { id, namaHari };
}

const getDaysName = (id) => {
    const day =
        id === 1 ? funcDay(1, "Senin") :
        id === 2 ? funcDay(2, "Selasa") :
        id === 3 ? funcDay(3, "Rabu") :
        id === 4 ? funcDay(4, "Kamis") :
        id === 5 ? funcDay(5, "Jumat") :
        funcDay("X", "Hari Libur");

    return (id, day);
}
module.exports = getDaysName;