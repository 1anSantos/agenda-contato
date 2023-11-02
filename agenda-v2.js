import Menu from "./src/Menu.js"
const menu = new Menu();

while (true) {
    const answer = menu.principal();
    if (!answer) break;
}