const fs = require('fs');
const path = 'd:/코딩/MYMBTI/src/data.js';
let content = fs.readFileSync(path, 'utf8');

// Replace instances like: "어떤 텍스트 (E)", type: OR "어떤 텍스트 (블라블라)", type:
content = content.replace(/\s*\([^)]+\)(?=", type:)/g, '');

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated data.js');
