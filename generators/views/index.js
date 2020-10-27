const Generator = require("yeoman-generator");


const files = ["container.js", "index.js", "view.js"];
const path_def = "views/Components"
module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);
  }

  async prompting() {
    this.log("Generator VIEWS starting... ");

    this.answers = await this.prompt([
      
      {
        type: "input",
        name: "name",
        message: "Input name for component:",
        validate: (input) => Boolean(input.length > 2),
      },
      {
        type: "input",
        name: "path",
        message: `Input path. By default:${path_def}- (optional):`,       
      },
    ]);
    
  }

  
  writing() {
    this.log("Writing files...");

    const { type, name, path } = this.answers;
    const path_name = path? path : path_def
    files.forEach((i) => {
      this.log("path:", this.templatePath(i))
      this.fs.copyTpl(  

        this.templatePath(i),
        this.destinationPath(
          `${path_name}/${name}/${name}${i}`
        ),
        {
          name,
        }
      );
    });
  }
  end() {
    this.log("...end");
  }
};
