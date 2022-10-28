const fs = require("fs");

// RENAME FILES / Move directories
// fs.renameSync(".lib.config.js", "./lib/project-config.js");

// console.log("Config.js file renamed");

// MOVE
// fs.rename("./lib/notes.md", "./notes", err => {
//     if(err) {
//         throw err;
//     }

//     console.log("Notes markdown file moved");
// })

// REMOVE
// fs.unlinkSync("./lib/project-config.js");

fs.unlink("notes.md", (err) => {
  if (err) {
    throw err;
  }

  console.log("Notes are gone");
});
