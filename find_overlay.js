const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const idx = content.indexOf('overlayLayer');
if (idx !== -1) {
    const start = content.lastIndexOf('<', idx);
    const end = content.indexOf('>', idx) + 1;
    console.log(content.substring(start, end));
} else {
    console.log('Not found');
}
