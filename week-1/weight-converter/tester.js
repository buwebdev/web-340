/**
 * Author: Professor Krasso
 * Date: 12-21-2023
 * File: tester.js
 * This code was generated with the assistance of GitHub Copilot.
 * Description:
 *  In order to execute this test script, it is mandatory to have Node.js installed on your machine.
 *  You can install Node.js by visiting https://nodejs.org/en/download/. After installation, to run the script,
 *  simply open a terminal window and enter the following command: "node tester.js". If the test is successful,
 *  the console will display "Test passed." Otherwise, it will show "Test failed." This script is intended to be
 *  used to test your weight-converter.js file, and should not be modified under any circumstances.
 *  You do not need to include this file in your final assignment or GitHub repository.
 *  Also, it is not necessary to understand how this script works.
 */

"use strict";

const { spawn } = require("child_process");
const path = require("path");

const testWeight = "10";
const expectedOutput = "4.54\n";  // Note: the output will have a trailing newline

const testProcess = spawn("node", ["weight-converter.js", testWeight], { cwd: path.dirname(__filename) });

testProcess.stdout.on("data", (data) => {
  const output = data.toString();

  if (output === expectedOutput) {
    console.log("Test passed.");
  } else {
    console.log("Test failed.");
  }
});

testProcess.on("close", () => {
  process.exit();
});