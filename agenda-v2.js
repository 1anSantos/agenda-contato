// const prompt = require("prompt-sync") ({sigint: false});
import PromptSync from "prompt-sync";
const prompt = PromptSync();

// let opcao = 0;

// while (opcao != 6) {
//     console.log('\n'+npm
//     '1- Adicionar contato\n'+
//     '2- Visualizar lista\n'+
//     '3- Editar contato\n'+
//     '4- Excluir Contato\n'+
//     '5- Pesquisar Contato\n'+
//     '6- Sair'
//     );
//     opcao = parseInt(prompt('>> '));
//     switch (opcao) {
//         case 1:
//             listaDeContatos.adicionarContato();
//             break;
//         case 2:
//             listaDeContatos.visualizarLista();
//             break;
//         case 3:
//             listaDeContatos.editarContato();
//             break;
//         case 4:
//             listaDeContatos.excluirContato();
//             break;
//         case 5:
//             listaDeContatos.pesquisarContato();
//             break;
//         case 6:
//             console.log("Saindo do Sistema...");
//             break;
//         default:
//             console.log(`A opção ${opcao} é inválida!!!`);
//     }
// }
