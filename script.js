const qrInput = document.getElementById('qr-input');
const qrGenerate = document.getElementById('qr-generate');
const qrCode = document.getElementById('qr-code');

qrGenerate.addEventListener('click', () => {
    const qrText = qrInput.value.trim();
    if (qrText === '') {
        alert('Please enter text to generate QR code');
        return;
    }

    const qrCodeElement = document.createElement('div');
    qrCodeElement.id = 'qr-code-element';
    qrCode.innerHTML = '';
    qrCode.appendChild(qrCodeElement);

    new QRCode(qrCodeElement, {
        text: qrText,
        width: 200,
        height: 200,
        colorDark: '#000',
        colorLight: '#fff',
        correctLevel: QRCode.CorrectLevel.H
    });
});