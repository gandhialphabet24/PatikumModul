let panjang = 20.5;
let lebar = 30;
let hargaPerMeter = 1500000;

let ppn = 15 / 100; // 15%
let luasTanah = panjang * lebar;
let totalHargaTanah = luasTanah * hargaPerMeter;
let totalPPN = totalHargaTanah * ppn;
let totalHarga = totalHargaTanah + totalPPN;

console.log("Total harga : Rp " + totalHarga.toLocaleString());
