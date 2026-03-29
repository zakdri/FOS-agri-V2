const fs = require('fs');
['index.html'].forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(/<div class="map-info-card"><\/div>/g, '');
        fs.writeFileSync(file, content, 'utf8');
        console.log('Removed from ' + file);
    }
});
