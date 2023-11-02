import Contato from './Contato.js';

class Cliente extends Contato {
    constructor(telefone, nome, email, empresa) {
        super(telefone, nome, email);
        this._empresa = empresa;
    }
    getDados() {
        const dadosContato = super.getDados();
        dadosContato.empresa = this._empresa;
        return dadosContato;
    }
    setEmpresa(empresa) {
        this._empresa = empresa;
    }
}

export default Cliente;