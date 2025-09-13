import Empresa from "./empresa";
import Endereco from "./endereco";
import Telefone from "./telefone";
import Funcionario from "./funcionario";
import Descritor from "./descritor";

// Endereço do Itaquerãoo (Neo Química Arena)
const enderecoEmpresa = new Endereco(
  777,
  "Av. Miguel Ignácio Curi",
  "Itaquera",
  "São Paulo"
);

// Telefones da empresa
const tel1 = new Telefone("11", "1910-1910");
const tel2 = new Telefone("11", "7777-1910");

// Funcionário / (jogador do Corinthians)
const enderecoFunc = new Endereco(
  10,
  "Rua Parque São Jorge",
  "Tatuapé",
  "São Paulo"
);
const telFunc = new Telefone("11", "9999-1910");
const funcionario1 = new Funcionario(
  "Yuri Alberto",
  "9",
  "191.010.191-00",
  enderecoFunc,
  telFunc
);

// Empresa time
const empresa = new Empresa(
  "Sport Club Corinthians Paulista LTDA",
  "Coringão Tech",
  "19.10.1910/0001-00",
  enderecoEmpresa,
  [funcionario1],
  [tel1, tel2]
);

// Descritor
const descritor = new Descritor(empresa);
descritor.descrever();
