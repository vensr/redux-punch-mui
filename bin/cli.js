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

console.log(`Cloning the repository with name ${repoName}`)
const checkedOut = runCommand(gitCheckOutCommand);
if(!checkedOut) process.exit(-1);

console.log(`Installing the dependencies for the ${repoName}`)
const installCommand = `cd ${repoName} && npm install`;
const installDeps = runCommand(installCommand);
if(!installDeps) process.exit(-1);

console.log("Congratulations! You are ready. Follow the below commands to start.");
console.log(`cd ${repoName} && npm start`);
