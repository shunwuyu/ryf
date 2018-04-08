const fs = require('fs');
const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;
  console.log(`${delay}ms`);
}, 100);

fs.readFile('test.js', () => {
  const startCallback = Date.now();
  while(Date.now() - startCallback < 200) {
    
  }
})