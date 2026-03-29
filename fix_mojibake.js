const fs = require('fs');

let content = fs.readFileSync('assets/data.js', 'utf8');

// Function to replace double-encoded UTF-8
content = content.replace(/["'](.*?)["']/g, (match, p1) => {
    // If it contains typical mojibake characters for Arabic (like Ø or Ù)
    if (/[ØÙ]/.test(p1)) {
        try {
            const decoded = Buffer.from(p1, 'latin1').toString('utf8');
            // Check if decoding actually produced Arabic characters (\u0600-\u06FF)
            if (/[\u0600-\u06FF]/.test(decoded)) {
                return '"' + decoded + '"';
            }
        } catch (e) {
            // ignore
        }
    }
    return match;
});

fs.writeFileSync('assets/data.js', content, 'utf8');
console.log('Fixed Mojibake in assets/data.js');
