function value(score) {
    switch (true) {
        case (score > 90 && score <= 100):
            console.log("Terbaik");
            break;
        case (score > 80 && score <= 90):
            console.log("Cukup Baik")
            break;
        case (score > 60 && score <= 80):
            console.log("Baik");
            break;
        case (score > 50 && score <= 60):
            console.log("Harus Semangat");
            break;
        case (score >= 0 && score <= 50):
            console.log("Remedial");
            break;
        default:
            console.log("Undefined");
            break;
    };
}
module.exports = value