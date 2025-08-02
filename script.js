function tampilkanKoleksi() {
  document.getElementById("beranda").classList.add("hidden");
  document.getElementById("koleksi").classList.remove("hidden");
}

function kembaliKeBeranda() {
  document.getElementById("koleksi").classList.add("hidden");
  document.getElementById("beranda").classList.remove("hidden");
}
