#!/usr/bin/env node
const {execSync} = require('child_process')

const runCommand = command => {
    try {
        execSync(`${command}`, {stdio: 'inherit'});
    } catch(e){
        console.log(`Failed to execute ${command}`, e);
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const gitCheckOutCommand = `git clone --depth 1 https://github.com/vensr/redux-punch-mui.git ${repoName}`;

console.log(`✅ Cloning the repository with name ${repoName}`)
const checkedOut = runCommand(gitCheckOutCommand);
if(!checkedOut) process.exit(-1);

console.log(`🧹 Cleaning up`);
const deleteBinCommand = `rm -rf ${repoName}/bin`;
const deleteBin = runCommand(deleteBinCommand);
if(!deleteBinCommand) process.exit(-1);

console.log(`Installing the dependencies for the ${repoName}`)
const installCommand = `cd ${repoName} && npm install`;
const installDeps = runCommand(installCommand);
if(!installDeps) process.exit(-1);

console.log("🚨 the vulnerabilities indicated are a false alarm. Refer https://github.com/facebook/create-react-app/issues/11174 for more details");

const auditCommand = `npm audit --omit=dev`;
console.log(`🔔 Running ${auditCommand} \r\n`);
const omitCommand = runCommand(auditCommand);
if(!omitCommand) process.exit(-1);

console.log(`\r\nInside ${repoName} directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

  We suggest that you begin by typing:

  cd ${repoName}
  npm start\r\n`);

console.log(`👋 Congratulations! You are ready. Your new project ${repoName} is created. Happy hacking!`);
