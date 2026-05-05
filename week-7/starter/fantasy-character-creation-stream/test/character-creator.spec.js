"use strict";

const { CharacterCreator } = require("../src/character-creator");

describe("CharacterCreator", () => {

  test("processes data correctly", (done) => {
    const stream = new CharacterCreator();
    let output = "";

    stream.on("data", chunk => {
      output += chunk.toString();
    });

    stream.write(JSON.stringify({
      class: "Warrior",
      gender: "Male",
      funFact: "Afraid of heights."
    }));

    setImmediate(() => {
      expect(output).toContain("Class: Warrior");
      done();
    });
  });

  test("emits error on empty input", (done) => {
    const stream = new CharacterCreator();

    stream.on("error", err => {
      expect(err).toBeInstanceOf(Error);
      done();
    });

    stream.write("");
  });

});