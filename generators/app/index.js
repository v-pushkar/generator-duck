const Generator = require("yeoman-generator");

const files_rc = ["component.js", "module.js", "index.js", "view.js"];
const files = ["component.js", "module.js", "index.js", "view.js"];
// const files = ["component.js", "module.js", "index.js", "view.js"];

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);
  }

  // first stage
  async prompting() {
    this.log("Generator starting... ");

    this.answers = await this.prompt([
      {
        type: "list",
        name: "type",
        message: "What do you want create?",
        choices: ["redux-module", "react component"],
        
      },
      {
        type: "input",
        name: "name",
        message: "Input the name for this module:",
        validate: (input) => Boolean(input.length > 3),
      },
    ]);
  }
actionExit(){
  this.log("EXIT copy");
}
  // second stage
  writing() {
    this.log("Writing files...");

    const { type, name } = this.answers;
if (type === "redux-module") {
      files.forEach((i) => {
        this.fs.copyTpl(
          this.templatePath(i),
          this.destinationPath(
            `components/${name}/${name}${i}`
          ),
          {
            name,
          }
        );
      });
    } else {
      this.log("No actions for you choice. try again");
    }
  }
  end() {
    this.log("Bye... 👋");
  }
};
