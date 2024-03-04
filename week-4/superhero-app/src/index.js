/**
 * Author:
 * Date:
 * File Name:
 * Description:
 */

"use strict";

const readline = require("readline");
const SuperheroEmitter = require("./superhero");

const superhero = new SuperheroEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// TODO: Set up event listeners for the superhero object
rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

  // TODO: Handle the commands
});

console.log(`Enter a command: "action", "danger", or "help", followed by a space and the argument.`);