import Endereco from "./endereco";
import Telefone from "./telefone";

export default class Funcionario {
  constructor(
    public nome: string,
    public matricula: string,
    public cpf: string,
    public endereco: Endereco,
    public telefone: Telefone
  ) {}

  getDados(): string {
    return `Nome: ${this.nome}
Matrícula: ${this.matricula}
CPF: ${this.cpf}
${this.endereco.getEndereco()}
Telefone: ${this.telefone.getTelefone()}`;
  }
}
