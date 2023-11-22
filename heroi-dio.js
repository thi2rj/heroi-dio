class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
    
    atacar() {
      let ataque;
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
          ataque = '';
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando um array de heróis
  let herois = [
    new Heroi('Merlin', 100, 'mago'),
    new Heroi('Arthur', 35, 'guerreiro'),
    new Heroi('Shaolin', 50, 'monge'),
    new Heroi('Hattori', 30, 'ninja')
  ];
  
  // Fazendo cada herói atacar
  for (let i = 0; i < herois.length; i++) {
    herois[i].atacar();
  }
  