export default class Telefone {
  constructor(public ddd: string, public numero: string) {}

  getTelefone(): string {
    return `(${this.ddd}) ${this.numero}`;
  }
}
