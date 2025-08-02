<script>
  // Saat DOM sudah siap
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("menu-beranda").addEventListener("click", function (e) {
      e.preventDefault(); // mencegah reload halaman
      document.getElementById("koleksi").classList.add("hidden");
      document.getElementById("beranda").classList.remove("hidden");
    });

    document.getElementById("menu-koleksi").addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("beranda").classList.add("hidden");
      document.getElementById("koleksi").classList.remove("hidden");
    });
  });
</script>
