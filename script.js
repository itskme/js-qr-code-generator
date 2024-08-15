const qrInput = document.getElementById('qr-input');
const qrGenerate = document.getElementById('qr-generate');
const qrCode = document.getElementById('qr-code');

qrGenerate.addEventListener('click', () => {
    const qrText = qrInput.value.trim();
    if (qrText === '') {
        alert('Please enter text to generate QR code');
        return;
    }
});