const form = document.getElementById("undanganForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil data pengantin pria
  const namaPria = document.getElementById("namaPria").value.trim();
  const namaAyahPria = document.getElementById("namaAyahPria").value.trim();
  const namaIbuPria = document.getElementById("namaIbuPria").value.trim();

  // Data pengantin wanita
  const namaWanita = document.getElementById("namaWanita").value.trim();
  const namaAyahWanita = document.getElementById("namaAyahWanita").value.trim();
  const namaIbuWanita = document.getElementById("namaIbuWanita").value.trim();

  // Data akad nikah
  const tanggalAkad = document.getElementById("tanggalAkad").value;
  const jamMulaiAkad = document.getElementById("jamMulaiAkad").value;
  const jamSelesaiAkad = document.getElementById("jamSelesaiAkad").value;
  const alamatAkad = document.getElementById("alamatAkad").value.trim();

  // Data resepsi
  const tanggalResepsi = document.getElementById("tanggalResepsi").value;
  const jamMulaiResepsi = document.getElementById("JamMulaiResepsi").value;
  const jamSelesaiResepsi = document.getElementById("jamSelesaiResepsi").value;
  const alamatResepsi = document.getElementById("alamatResepsi").value.trim();

  //data anak ke berapa
  const anakPria = document.getElementById("anakKePria").value.trim()
  const anakWanita = document.getElementById("anakKeWanita").value.trim()
  const namaPanggilanPria = document.getElementById("namaPanggilanPria").value.trim()
  const namaPanggilanWanita = document.getElementById("namaPanggilanWanita").value.trim()
  // Format pesan
  const pesan =
    `Berikut saya kirimkan detail data undangan yang perlu dicetak:\n\n` +
    `🔹 *Data Pengantin Pria*\n` +
    `- Nama: ${namaPria}\n` +
    `-Nama Panggilan : ${namaPanggilanPria}\n` +
    `- Ayah: ${namaAyahPria}\n` +
    `- Ibu: ${namaIbuPria}\n` +
    `- Anak ke- : ${anakPria}\n\n` +

    `🔹 *Data Pengantin Wanita*\n` +
    `- Nama: ${namaWanita}\n` +
    `- Nama Panggilan : ${namaPanggilanWanita}\n` +
    `- Ayah: ${namaAyahWanita}\n` +
    `- Ibu: ${namaIbuWanita}\n` +
    `- Anak Ke- : ${anakWanita}\n\n` +

    `🔹 *Akad Nikah*\n` +
    `- Tanggal: ${tanggalAkad}\n` +
    `- Waktu: ${jamMulaiAkad} - ${jamSelesaiAkad}\n` +
    `- Alamat: ${alamatAkad}\n\n` +
    `🔹 *Resepsi Pernikahan*\n` +
    `- Tanggal: ${tanggalResepsi}\n` +
    `- Waktu: ${jamMulaiResepsi} - ${jamSelesaiResepsi}\n` +
    `- Alamat: ${alamatResepsi}\n\n` +
    `*Note:* Untuk denah & barcode, share lokasi via WhatsApp, dan kirim foto denah dari kertas.`;

  // Encode dan kirim ke WhatsApp
  const noWa = "6289611042972"; // Nomor tujuan
  const url = `https://wa.me/${noWa}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
});
