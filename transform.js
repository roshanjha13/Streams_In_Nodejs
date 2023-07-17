const http = require("http");

const fs = require("fs");
const { Transform } = require("stream");
require("dotenv").config();

const server = http.createServer((req, res) => {
  if (req.url !== "/") {
    return res.end();
  }
  const sampleFileStream = fs.createReadStream("sample.txt");

  const outputWritableStream = fs.createWriteStream("output.txt");

  const transFormStream = new Transform();

  sampleFileStream.on("data", (chunk) => {
    console.log("data received", chunk.toString());
    //process
    const stringProcessing = chunk.toString();
    const finalString = stringProcessing
      .replaceAll(/ipsum/gi, "cool")
      .toUpperCase();

    //writable stream write
    outputWritableStream.write(finalString);
  });
});

const PORT = process.env.PORT;

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
