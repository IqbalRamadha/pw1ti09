function BiayaParkir() {
    let Masuk = document.querySelector("#Masuk").value
    let Keluar = document.querySelector("#Keluar").value
    //hitung durasi parkir
    let durasi = Keluar - Masuk

    let biaya = 3000;
     //hitung durasi parkir untuk menghitung biaya
    for (let i = 2; i < durasi; i++) {
        biaya += 1000
    }
    // tangkap elemen untuk menampilkan hasil
    let hasilDurasi = document.querySelector("#hasilDurasi")
    let totalBiaya = document.querySelector("#totalBiaya")

    // tampilan hasil
    hasilDurasi.innerHTML = durasi
    totalBiaya.innerHTML = biaya

}