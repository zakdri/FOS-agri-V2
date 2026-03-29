const fs = require('fs');
const files = ['index.html', 'assets/carte-head.txt', 'assets/morocco-map.svg'];
files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        if (content.includes('id="overlayLayer"')) {
            content = content.replace(/id="overlayLayer"/g, '');
            fs.writeFileSync(file, content, 'utf8');
            console.log('Removed from ' + file);
        } else {
            console.log('Not found in ' + file);
        }
    }
});
