const http = require("http");
require("dotenv").config();
const fs = require("fs");

const { Transform } = require("stream");

const replaceWordProcessing = require("./replaceWordProcessor");

const uppercaseWordProcessing = require("./uppercaseWordProcessing");

const server = http.createServer((req, res) => {
  if (req.url !== "/") {
    return res.end();
  }
  const sampleFileStream = fs.createReadStream("sample.txt");

  const outputWritableStream = fs.createWriteStream("output.txt");

  sampleFileStream
    .pipe(replaceWordProcessing)
    .on("error", (err) => {
      console.log(err);
    })
    .pipe(uppercaseWordProcessing)
    .on("error", (err) => {
      console.log(err);
    })
    .pipe(outputWritableStream)
    .on("error", (err) => {
      console.log(err);
    });
});

const PORT = process.env.PORT;

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
