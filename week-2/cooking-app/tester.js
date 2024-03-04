/**
 * Author: Professor Krasso
 * Date: 1/02/2024
 * File Name: tester.js
 * This code was generated with the assistance of GitHub Copilot.
*/

// Try to import the student's module
let recipes;
try {
  recipes = require("./recipes");
} catch (error) {
  console.error("Failed to import module. Make sure you have exported your module correctly.");
  process.exit(1);
}

// Check that the createRecipe function exists and works correctly
if (typeof recipes.createRecipe !== "function") {
  console.error("createRecipe function is missing or not a function");
  process.exit(1);
} else {
  try {
    const result = recipes.createRecipe(["ingredient1", "ingredient2"]);
    if (result !== "Recipe created with ingredients: ingredient1, ingredient2") {
      console.error("createRecipe function returned incorrect value:", result);
      process.exit(1);
    }
  } catch (error) {
    console.error("createRecipe function threw an error:", error);
    process.exit(1);
  }
}

// Check that the setTimer function exists and works correctly
if (typeof recipes.setTimer !== "function") {
  console.error("setTimer function is missing or not a function");
  process.exit(1);
} else {
  try {
    const result = recipes.setTimer(15);
    if (result !== "Timer set for 15 minutes") {
      console.error("setTimer function returned incorrect value:", result);
      process.exit(1);
    }
  } catch (error) {
    console.error("setTimer function threw an error:", error);
    process.exit(1);
  }
}

// Check that the quit function exists and works correctly
if (typeof recipes.quit !== "function") {
  console.error("quit function is missing or not a function");
  process.exit(1);
} else {
  try {
    const result = recipes.quit();
    if (result !== "Program exited") {
      console.error("quit function returned incorrect value:", result);
      process.exit(1);
    }
  } catch (error) {
    console.error("quit function threw an error:", error);
    process.exit(1);
  }
}

// Check the package.json file for the required scripts
let packageJson;
try {
  packageJson = require("./package.json");
} catch (error) {
  console.error("Failed to import package.json. Make sure it exists and is valid JSON.");
  process.exit(1);
}

if (!packageJson.scripts || packageJson.scripts.start !== "node index.js" || packageJson.scripts.test !== "node tester.js") {
  console.error("package.json is missing the required scripts or they have incorrect values. Make sure you have a 'start' script with the value 'node index.js' and a 'test' script with the value 'node tester.js'.");
  process.exit(1);
}

console.log("All tests passed!");