const task = {
    nama: "M Alzi S",
    universitas: "Mercubuana",
    fakultas: "Ilmu Komputer",
};

const { nama, universitas, fakultas } = task;

const taskStringFromDestruct = `Nama Saya: ${nama}, dari Universitas: ${universitas}, dan Fakultas: ${fakultas}`;

console.log("taskStringFromDestruct: ", taskStringFromDestruct);