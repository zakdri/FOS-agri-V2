const fs = require('fs');
const content = fs.readFileSync('assets/data.js', 'utf8');
const arSection = content.substring(content.indexOf('ar: {'), content.indexOf('ar: {') + 200);
console.log('arSection:', arSection);

const decoded = Buffer.from("ÙˆØ²Ø§Ø±Ø©", 'latin1').toString('utf8');
console.log('Decoded manual str:', decoded);

// Try converting the whole snippet:
const decodedSection = Buffer.from(arSection, 'latin1').toString('utf8');
console.log('Decoded section:', decodedSection);
