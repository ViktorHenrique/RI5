import Empresa from "./empresa";

export default class Descritor {
  constructor(private empresa: Empresa) {}

  descrever(): void {
    console.log("=== Empresa ===");
    console.log(`Razão Social: ${this.empresa.razaoSocial}`);
    console.log(`Nome Fantasia: ${this.empresa.nomeFantasia}`);
    console.log(`CNPJ: ${this.empresa.cnpj}`);
    console.log(`Endereço: ${this.empresa.endereco.getEndereco()}`);

    console.log("\nTelefones:");
    this.empresa.telefones.forEach(t => console.log(t.getTelefone()));

    console.log("\nFuncionários:");
    this.empresa.funcionarios.forEach(f => console.log(f.getDados() + "\n"));
  }
}
