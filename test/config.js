
const path = require('path');

// Tell jspm-fs where to find the packages release files
const baseDir = path.join(__dirname, 'fixtures', 'packages');
process.env.JSPM_REGISTRY_FS_BASEDIR = baseDir;
console.log(baseDir);
