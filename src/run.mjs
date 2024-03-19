import { exec } from "node:child_process";

function main(args) {
  if (args.length < 3) {
    console.log("Please give folder name to run");
  }
  const folder = args[2];

  // Build
  exec(`tsup src/${folder}/index.ts`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log("BUILD SUCCESS");

    // Run
    exec("node ./dist/index.js", (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(stdout);
    });
  });
}

main(process.argv);
