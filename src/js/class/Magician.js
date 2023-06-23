import Character from './Character';

export default class Magician extends Character {
  constructor(name, type = 'Magician') {
    super(name, type);
    this._attack = 100;
    this.defence = 40;
    
  }
  get attack() {
    return this._attack;
  }

  set attack (range) {
    
    let step =  (range / 10 - 0.1).toFixed(1);

    this._attack = this._attack - (this._attack * step);
   
  }

  get stoned () {
    return this._attack
  }
  set stoned (range) {
    let step =  (range / 10 - 0.1).toFixed(1);

    this._attack = (this._attack - (this._attack * step)) - (Math.log2(range) * 5);

    return this._attack
  }
  
};
 let mage = new Magician("sofia");
 mage.stoned = 2;
 console.log(mage.attack)

