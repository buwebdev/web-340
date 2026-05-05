"use strict";

const { Duplex } = require("stream");

class CharacterCreator extends Duplex {
  constructor(options = {}) {
    super({ ...options, decodeStrings: false });
  }

  _write(chunk, encoding, callback) {
    try {
      if (!chunk) {
        const err = new Error("Empty input.");
        this.emit("error", err);
        return callback(err);
      }

      const input = typeof chunk === "string"
        ? JSON.parse(chunk)
        : chunk;

      const formatted =
        `Class: ${input.class}\n` +
        `Gender: ${input.gender}\n` +
        `Fun Fact: ${input.funFact}\n`;

      this.push(formatted);
      callback();
    } catch (err) {
      this.emit("error", err);
      callback(err);
    }
  }

  _read() {}
}

module.exports = { CharacterCreator };