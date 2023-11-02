// import Contato from "./tipo-contato/Contato.js";
// import Cliente from "./tipo-contato/Cliente.js";
// import Amigo from "./tipo-contato/Amigo.js";
// import ColegaDeTrabalho from "./tipo-contato/ColegaDeTrabalho.js";

class Lista {
    constructor(lista) {
        this._lista = lista;
    }
    getLista() {
        return this._lista;
    }
    pesquisarContato(nome) {
        return this._lista.filter(contato => contato.temNomePesquisado(nome));
    }
    adicionarContato(contato) {
        this._lista.push(contato);
    }
    excluirContato(index) {
        this._lista.splice(index, 1);
    }
    editarContato(contato, propriedade, valor) {
        propriedade = propriedade.replace(/_+/g, ' ').split(" ").map(word => {
            word = word.charAt(0).toUpperCase() + word.slice(1);
            return word;
        }).join("");
        contato[`set${propriedade}`](valor);
    }
}

/*
visualizarLista() {
    for (const contato of this._lista) {
        const dados = contato.getDados();
        for (const propriedade in dados) {
            const title = propriedade.replace(/_+/g, ' ').split(" ").map(word => {
                word = word.charAt(0).toUpperCase() + word.slice(1);
                return word;
            }).join(" ");
            console.log(`${title}: ${dados[propriedade]}`);
        }
    }
}
*/

// const lista = new Lista([]);
// const lucas = new Amigo(40028922, "Lucas", "isos@email", "21/05/2006");
// const ian = new Amigo(40028922, "ian", "isos@email", "21/05/2006");
// const jaime = new Amigo(40028922, "Jáime", "isos@email", "21/05/2006");

// lista.adicionarContato(ian);
// lista.adicionarContato(lucas);
// lista.adicionarContato(jaime);