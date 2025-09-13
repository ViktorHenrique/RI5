export default class Endereco {
  constructor(
    public numero: number,
    public rua: string,
    public bairro: string,
    public cidade: string
  ) {}

  getEndereco(): string {
    return `Rua: ${this.rua}, Nº: ${this.numero}, Bairro: ${this.bairro}, Cidade: ${this.cidade}`;
  }
}
