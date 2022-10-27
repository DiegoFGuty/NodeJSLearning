const fs = require("fs");

let md = `
    This is a New File
    ===================

    ES6 Template Stings are cool. They honor whitespace.

    * Template Strings
    * Node File System
    * Readline CLIs
`;

fs.writeFile("fsWriteFile.md", md.trim(), (err) => {
  if (err) {
    throw err;
  }
  fs.appendFileSync("fsWriteFile.md", "\n\n### Node.js Everyone!");
  console.log("Markdown Created");
});
