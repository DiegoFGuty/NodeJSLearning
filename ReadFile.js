const fs = require("fs");

// READ DIRECTORIES

// let files = fs.readdir("./", (err, files) => {
//   if (err) {
//     throw err;
//   }
//   console.log(files);
// });

// console.log("reading files...");

fs.readFile("./fsReadme.txt", "UTF-8", (err, ipsum) => {
  console.log(ipsum);
});

console.log("reading the file...");
