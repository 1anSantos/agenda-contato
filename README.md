# Agenda de Contatos V2.5
Projeto de POO | Turma 922-A

Orientador: Ricardo Rubens

obs: Utilize o CHANGELOG.md para ver as mudanças entre as versões e acesse-as através das branchs do projeto.



## Integrantes
- **Gabriel Rodrigues** -> Função: Desenvolvedor e Analista de Testes, fez a Classe ColegaDeTrabalho e testou o programa em busca de bugs;

- **Ian dos Santos** -> Função: Desenvolvedor, fez a Classe Contato e Menu;

- **Mayara Lins** -> Função: Desenvolvedor, fez as Subclasses Cliente e Amigo;



## Perguntas
1. **Tudo o que foi pedido foi realizado? Faltou Algo?**
    - Sim e ainda foi realizado até validação entre as opções 

2. **Há algum problema/erro indentificado?**
    - Não é bem um erro e sim algo que incomoda o usuário, não existir campos opcionais e na hora de editar, quando o usuário deixa um campo em branco de propósito para não ser atualizado ele alerta como "campo inválido"

3. **Descrição da experiência:**
    - Bastante desafiadora, pudemos praticar o conteúdo visto em aula e tivemos a oportunidade de compreender o assunto melhor de maneira ativa, além de adicionar coisas a mais nesse projeto.

4. **Dificuldades encontradas:**
    - passar o modelo *Common JS* do **prompt-sync** para o modelo *ES6*
    - Separação da parte gráfica do código central
    - A validação de data estava dando erro pois na nova versão do pacote validator essa função está passando por manuntenção, então tivemos que ir para uma versão anterior (13.9.0)



## Referências
1. **Pacote validator:**
    - `npm install validator`
    - https://www.npmjs.com/package/validator
    - https://github.com/validatorjs/validator.js
2. **Normalize:**
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
3. **Problema de passar o prompt-sync para o modelo ES6:**
    - https://stackoverflow.com/questions/65852175/convert-prompt-sync-require-into-import-method
