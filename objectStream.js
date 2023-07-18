const { Readable, Writable } = require("stream");

const readableStream = new Readable({
  objectMode: true,
  highWaterMark: 6,
  read() {},
});

readableStream.on("data", (chunk) => {
  console.log("data :", chunk);
});

console.log(
  readableStream.push({
    name: "roshan",
  })
);
