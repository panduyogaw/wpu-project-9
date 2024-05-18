
function cetakNama(nama) {
    return 'Halo, nama saya Pandu';
}


const PI = 3.14;

const mahasiswa = {
    nama : 'Pandu Yoga Wibowo',
    umur : 20,
    cetakMhs() {
        return 'Halo perkenalkan nama saya Pandu, umur saya 20 tahun';
    },
};

module.exports.cetakNama = cetakNama;
module.exports.PI = PI;
module.exports.mahasiswa = mahasiswa
