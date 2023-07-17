const { Transform } = require("stream");

const replaceWordProcessing = new Transform({
  transform(chunk, encoding, cb) {
    const finalString = chunk
      .toString()
      .replaceAll(/ipsum/gi, "cool")
      .toUpperCase();

    cb(null, finalString);
  },
});

module.exports = replaceWordProcessing;
