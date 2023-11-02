import Contato from './Contato.js';

class ColegaDeTrabalho extends Contato {
    constructor(telefone, nome, email, departamento) {
        super(telefone, nome, email);
        this._departamento = departamento;
    }
    getDados() {
        const dadosContato = super.getDados();
        dadosContato.departamento = this._departamento;
        return dadosContato;
    }
    setDepartamento(departamento) {
        this._departamento = departamento;
    }
}

export default ColegaDeTrabalho;