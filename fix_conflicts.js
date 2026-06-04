const fs = require('fs');
const file = 'src/pages/Home.jsx';
let content = fs.readFileSync(file, 'utf8');

// The regex to keep the PORTFOLIO (incoming) side of the conflict:
const regex = /<<<<<<< HEAD\r?\n[\s\S]*?=======\r?\n([\s\S]*?)>>>>>>> 12240ea \(PORTFOLIO\)\r?\n/g;

let newContent = content.replace(regex, '$1');

// Update the scores that the user requested:
// Secondary Education (10th) to 78
newContent = newContent.replace(
  /label: "SECONDARY_SCHOOL",[\s\S]*?score: 92,/,
  match => match.replace('score: 92,', 'score: 78,')
);

// Higher Secondary (12th) to 68
newContent = newContent.replace(
  /label: "JUNIOR_COLLEGE",[\s\S]*?score: 92,/,
  match => match.replace('score: 92,', 'score: 68,')
);

fs.writeFileSync(file, newContent, 'utf8');
console.log('Fixed conflicts in', file);
