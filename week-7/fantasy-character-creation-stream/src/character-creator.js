const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    // TODO: Initialize your class here
  }

  _write(chunk, encoding, callback) {
    // TODO: Implement your _write method here
  }

  _read(size) {
    // TODO: Implement your _read method here
  }
}

module.exports = CharacterCreator;