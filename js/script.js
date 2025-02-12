function submitRiseHand() {
    const nama = document.getElementById('nama').value;
    const kelompok = document.getElementById('kelompok').value;

    if (nama && kelompok) {
        const risehandList = document.getElementById('risehand-ul');
        const li = document.createElement('li');
        li.textContent = `${nama} - Kelompok ${kelompok}`;
        risehandList.prepend(li); // Menambahkan ke atas list

        // Clear input
        document.getElementById('nama').value = '';
        document.getElementById('kelompok').value = '';
    } else {
        alert('Harap isi nama dan kelompok!');
    }
}

// Fungsi untuk membuka modal Rise Hand
function openRiseHandModal() {
    document.getElementById('risehand-modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

// Fungsi untuk menutup modal Rise Hand
function closeRiseHandModal() {
    document.getElementById('risehand-modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Fungsi untuk submit Rise Hand
function submitRiseHand() {
    const nama = document.getElementById('nama').value;
    const kelompok = document.getElementById('kelompok').value;

    if (nama && kelompok) {
        const risehandList = document.getElementById('risehand-ul');
        const li = document.createElement('li');
        li.textContent = `${nama} - Kelompok ${kelompok}`;
        risehandList.prepend(li); // Menambahkan ke atas list

        // Clear input
        document.getElementById('nama').value = '';
        document.getElementById('kelompok').value = '';

        // Tutup modal setelah submit
        closeRiseHandModal();
    } else {
        alert('Harap isi nama dan kelompok!');
    }
}