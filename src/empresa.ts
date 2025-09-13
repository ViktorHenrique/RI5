import Endereco from "./endereco";
import Funcionario from "./funcionario";
import Telefone from "./telefone";

export default class Empresa {
  constructor(
    public razaoSocial: string,
    public nomeFantasia: string,
    public cnpj: string,
    public endereco: Endereco,
    public funcionarios: Funcionario[] = [],
    public telefones: Telefone[] = []
  ) {}
}
