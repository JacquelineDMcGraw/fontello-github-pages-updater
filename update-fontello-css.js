const fs = require('fs');
const cssPath = 'css/fontello.css';  
const css = fs.readFileSync(cssPath, 'utf8');
const updatedCss = css.replace(/url\(['"]?(font\/[^'"]+)['"]?\)/g, `url('https://${process.env.GITHUB_REPOSITORY}/${process.env.GITHUB_REF}/master/$1')`);
fs.writeFileSync(cssPath, updatedCss);
