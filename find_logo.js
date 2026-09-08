const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('C:\\Users\\battu\\.gemini\\antigravity-ide\\brain\\e9907296-c3bc-40b1-91c3-ca1a9a135c32\\.system_generated\\logs\\transcript_full.jsonl')
});

rl.on('line', (line) => {
  if (line.includes('Revert GokulamLogo to centered layout') || line.includes('GokulamLogo.jsx')) {
    try {
      const s = JSON.parse(line);
      if (s.tool_calls) {
        for (const tc of s.tool_calls) {
          if (tc.args && tc.args.CodeContent && tc.args.CodeContent.includes('export default function GokulamLogo')) {
            fs.writeFileSync('scratch_found_logo.jsx', tc.args.CodeContent);
            console.log('Saved old logo from step', s.step_index);
          }
        }
      }
    } catch (e) {}
  }
});
