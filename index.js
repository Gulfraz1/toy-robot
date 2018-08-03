var Robot = require("./toy-robot");
var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let robot;

function enterCommand() {
  rl.question("Command: ", function(command) {
    if (command === "exit") {
      rl.close();
      return;
    } else if (command === "right") {
      if (robot) {
        robot.right();
      } else {
        console.log("Please place robot");
      }
    } else if (command === "left") {
      if (robot) {
        robot.left();
      } else {
        console.log("Please place robot");
      }
    } else if (command === "move") {
      if (robot) {
        robot.move();
      } else {
        console.log("Please place robot");
      }
    } else if (command === "report") {
      if (robot) {
        robot.report();
      } else {
        console.log("not rebort to report");
      }
    } else if (command.indexOf("place") > -1) {
      var commandTockens = command.split(",");
      if (commandTockens.length !== 4) {
        console.log("incorrect input");
      } else {
        robot = new Robot(
          parseInt(commandTockens[1]),
          parseInt(commandTockens[2]),
          commandTockens[3]
        );
      }
    } else {
      console.log("Use a valid command!'");
    }
    enterCommand();
  });
}
enterCommand();
