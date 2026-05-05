"use strict";

const path = require("path");
const { writeCharacter, readCharacter } = require("../src/character-creation");

describe("File System Character Creation", () => {

  test("writes character data to a file", async () => {
    const character = {
      class: "Warrior",
      gender: "Male",
      funFact: "Hates spiders."
    };

    const result = await writeCharacter(character);
    expect(result).toBe(true);
  });

  test("reads character data and returns an object", async () => {
    const character = {
      class: "Mage",
      gender: "Other",
      funFact: "Collects rare books."
    };

    await writeCharacter(character);
    const data = await readCharacter();

    expect(typeof data).toBe("object");
    expect(data.class).toBe("Mage");
  });

  test("throws an error when file does not exist", async () => {
    await expect(readCharacter("missing.json"))
      .rejects
      .toBeInstanceOf(Error);
  });

});
