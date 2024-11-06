
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = '';
    switch (this.tipo) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'realizou um ataque desconhecido';
    }
    return `O ${this.tipo} atacou usando ${ataque}`;
  }
}

function criarHeroi() {
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const tipo = document.getElementById('tipo').value;

  if (nome && idade && tipo) {
    const heroi = new Heroi(nome, idade, tipo);
    const mensagemAtaque = heroi.atacar();
    document.getElementById('resultado').textContent = mensagemAtaque;
  } else {
    document.getElementById('resultado').textContent = 'Preencha todos os campos!';
  }
}