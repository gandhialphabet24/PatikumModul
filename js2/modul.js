let barang = [
  { nama: "Beras", harga: 10000, jumlah: 5 },
  { nama: "Gula", harga: 14000, jumlah: 5 },
  { nama: "Telur", harga: 20000, jumlah: 2 },
  { nama: "Minyak Goreng", harga: 9000, jumlah: 10 },
];

let totalbelanja = 0;

for (let i = 0; i < barang.length; i++) {
  totalbelanja += barang[i].harga * barang[i].jumlah;
}

console.log(
  "total belanja bu Astuti adalah : Rp. " + totalbelanja.toLocaleString()
);