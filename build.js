const fs = require('fs');
const path = require('path');

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

const distDir = path.join(__dirname, 'dist');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

fs.writeFileSync(path.join(distDir, 'dry.css'), css);

console.log('Built dry.css –', css.length, 'bytes');
