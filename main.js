#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let amount = 20000;
console.log(chalk.bgBlueBright("Welcome to easypaisa account of:"));
console.log((chalk.greenBright("Mariyam Iqbal")));
let balance = 70000;
let accountAns = await inquirer.prompt([{
        name: "easypaisa",
        type: "list",
        messge: "select options",
        choices: ["Transfer money", "Bill payments", "Easy load bundle"]
    }]);
console.log(accountAns);
if (accountAns.easypaisa === "Transfer money") {
    let transferAns = await inquirer.prompt([{
            name: "transfer",
            type: "number",
            messge: "enter amount for transfer",
        }]);
    amount -= transferAns.transfer;
    console.log("Money Transfer Sucessfully........");
}
else if (accountAns.easypaisa === "Bill payments") {
    let billAns = await inquirer.prompt([{
            name: "bill amount",
            type: "number",
            messge: "enter amount for bill",
        }]);
    amount -= billAns.billamount;
    console.log("*****Bill paid sucessfully*****");
}
else if (accountAns.easypaisa === "Easy load bundle") {
    let bundleAns = await inquirer.prompt([{
            name: "bundle network",
            type: "list",
            messge: "enter amount for bundle",
            choices: ["Zong bundle", "Jazz bundle", "Ufone bundle"]
        }]);
    {
        let bundleType = await inquirer.prompt([{
                name: "bundle type",
                type: "list",
                message: "select your bundle",
                choices: ["Monthly bundle", "Weekly bundle"],
            }]);
        let bundlePrize = await inquirer.prompt([{
                name: "bundle prize",
                type: "list",
                messege: "Bundle prize",
                choices: ["1000", "1500", "2000", "2500"]
            }]);
    }
    console.log(chalk.red("Congratulation bundle sucessfully activated"));
}
else {
    console.log("wrong answer");
}
