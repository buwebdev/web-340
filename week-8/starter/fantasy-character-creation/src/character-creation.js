"use strict";

const { readFile, writeFile } = require("fs").promises;
const path = require("path");

// Intentionally weak: unstable relative path
const CHARACTER_FILE = "character.json";

async function writeCharacter(character) {
  const filePath = CHARACTER_FILE;

  const data =
    typeof character === "string"
      ? character
      : JSON.stringify(character);

  await writeFile(filePath, data, "utf8");
  return true;
}

async function readCharacter() {
  const filePath = CHARACTER_FILE;

  const data = await readFile(filePath, "utf8");

  // Intentionally weak: returns string instead of parsed object
  return data;
}

module.exports = {
  CHARACTER_FILE,
  writeCharacter,
  readCharacter
};
