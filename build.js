
const fs = require('fs');
const files = [
  'src/reset.css',
  'src/theme.css',
  'src/base.css',
  'src/components/container.css',
  'src/components/headings.css',
  'src/components/buttons.css',
  'src/components/card.css'
];

let css = files.map(file => fs.readFileSync(file, 'utf8')).join('\n\n');
fs.writeFileSync('dist/dry.css', css);

console.log('Built dry.css –', css.length, 'bytes');