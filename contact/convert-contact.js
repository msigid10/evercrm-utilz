const fs = require('fs');

// Fungsi untuk mengonversi nomor telepon ke format WhatsApp
function convertToWhatsAppNumber(phoneNumber) {
    return `${phoneNumber}@s.whatsapp.net`;
}

// Baca file CSV
fs.readFile('./contact/contact_data.csv', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Parse data CSV
    const rows = data.trim().split('\n').map(row => row.split(','));

    // Ambil nomor telepon dan konversi ke format WhatsApp
    const whatsappNumbers = rows.map(row => convertToWhatsAppNumber(row[0]));

    // Tulis hasil ke file output
    fs.writeFile('output.txt', JSON.stringify(whatsappNumbers), err => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('Output file has been saved.');
    });
});
