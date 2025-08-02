<script>
    document.getElementById('btnBeranda').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('berandaSection').style.display = 'block';
        document.getElementById('koleksiSection').style.display = 'none';
    });

    document.getElementById('btnKoleksi').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('berandaSection').style.display = 'none';
        document.getElementById('koleksiSection').style.display = 'block';
    });
</script>
