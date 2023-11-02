// const prompt = require("prompt-sync") ({sigint: false});
import PromptSync from "prompt-sync";
const prompt = PromptSync();

import Menu from "./src/Menu.js"
const menu = new Menu();

// console.log(menu)

while (true) {
    const answer = menu.general();
    if (!answer) break;
}