const fs = require("fs");

if (fs.existsSync("your-files-here")) {
  console.log("File already exists");
} else {
  fs.mkdir("your-files-here", (err) => {
    if (err) {
      console.log(`ERROR: ${err}`);
    } else {
      console.log("Directory created");
    }
  });
}
