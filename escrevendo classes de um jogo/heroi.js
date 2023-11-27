class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = '';

        switch (this.tipo) {
            case 'Mago':
              ataque = 'Magia';
              break;
            case 'Guerreiro':
              ataque = 'Espada'; 
              break;
            case 'Monge':
              ataque = 'Artes marciais'
              break;
            case 'Ninja':
              ataque = 'Shuriken';
              break;
            default:
              ataque = 'Não possui ataque definido';                           
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe Heroi
const heroi1 = new Heroi('Gandalf', 1500, 'Mago');
heroi1.atacar(); // Saída: O mago atacou usando magia

const heroi2 = new Heroi('Aragorn', 35, 'Guerreiro');
heroi2.atacar(); // Saída: O guerreiro atacou usando espada

const heroi3 = new Heroi('Bruce Lee', 32, 'Monge');
heroi3.atacar(); // Saída: O monge atacou usando artes marciais

const heroi4 = new Heroi('Hanzo', 28, 'Ninja');
heroi4.atacar(); // Saída: O ninja atacou usando shuriken