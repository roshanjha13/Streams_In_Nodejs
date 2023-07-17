const { Transform } = require("stream");

const uppercaseWordProcessing = new Transform({
  transform(chunk, encoding, cb) {
    cb(null, chunk.toString().toUpperCase());
  },
});

module.exports = uppercaseWordProcessing;
