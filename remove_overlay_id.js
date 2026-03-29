const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');
content = content.replace('id="overlayLayer"', '');
fs.writeFileSync('index.html', content, 'utf8');
console.log('Replaced id="overlayLayer" in index.html');
