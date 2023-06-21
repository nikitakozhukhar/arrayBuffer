import Character from './Character';

export default class Magician extends Character {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
    
  }

  get attack() {
    return this.attack;
  }

  set attack (range) {
    if (range == 1) {
      this.attack = 10;
    }
    if (range == 2) {
      this.attack = 10 - (10 * 0.1);
    }
    if (range == 3) {
      this.attack = 10 - (10 * 0.2);
    }
    if (range == 4) {
      this.attack = 10 - (10 * 0.3);
    }
    if (range == 5) {
      this.attack = 10 - (10 * 0.4);
    }
    return this.attack;
  }

  get stoned () {
    return this.attack
  }
  set stoned (range) {
    this.attack = this.attack - Math.log(range) * 5
     return this.attack
  }
};
 let mage = new Magician("sofia");
 mage.set(2)
 console.log(mage.attack)

