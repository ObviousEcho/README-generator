// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of your README:",
  },

  {
    type: "input",
    name: "description",
    message: "Enter the description of your project:",
  },

  {
    type: "input",
    name: "installation",
    message: "Enter Instructions for how to install your Node project:",
  },

  {
    type: "input",
    name: "usage",
    message: "Enter a usage description for you project:",
  },

  {
    type: "list",
    name: "license",
    message: "Select your applicable license:",
    choices: ["GNU GPL v3", "MIT", "Apache License 2.0", "BSD 3"],
  },

  {
    type: "input",
    name: "contributing",
    message: "Enter contributer information:",
  },

  {
    type: "input",
    name: "tests",
    message: "Enter testing information for your project:",
  },

  {
    type: "input",
    name: "github",
    message: "Enter your GitHub user name:",
  },

  {
    type: "input",
    name: "email",
    message: "Enter your email:",
  },
];

const readMeFile = "README.md";

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), err => err ? console.log(err): console.log("Success!"));
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      console.log(data);
      writeToFile(readMeFile, data);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("couldn't be rendered in the current environment");
      } else {
        console.log("Something is seriously wrong!");
      }
    });
}

// Function call to initialize app
init();
