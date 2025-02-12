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