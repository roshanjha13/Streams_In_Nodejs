const http = require("http");
require("dotenv").config();
const fs = require("fs");

const { Transform, pipeline } = require("stream");

const replaceWordProcessing = require("./replaceWordProcessor");

const uppercaseWordProcessing = require("./uppercaseWordProcessing");

const server = http.createServer((req, res) => {
  if (req.url !== "/") {
    return res.end();
  }
  const sampleFileStream = fs.createReadStream("sample.txt");

  const outputWritableStream = fs.createWriteStream("output.txt");

  pipeline(
    sampleFileStream,
    replaceWordProcessing,
    uppercaseWordProcessing,
    outputWritableStream,
    (err) => {
      if (err) {
        console.log("error handling here", err);
      }
    }
  );
});

const PORT = process.env.PORT;

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
