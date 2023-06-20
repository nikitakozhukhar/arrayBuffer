import Character from './Character';

export default class Magician extends Character {
  constructor(name, type = 'Magician') {
    super(name, type);
    // this.attack = 10;
    this.defence = 40;

    
  }
  get attack() {
    return this._attack;
  }

  set attack(range) {
    if (range) {
      this._attack = 10;
    }
    if (range == 1) {
      this._attack = 10;
    }
    this._attack = value;
  }
};

