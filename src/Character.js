export default class Character {
  constructor(name, type) {
    if ((name.length < 2) || (name.length > 10 || typeof (name) !== 'string')) {
      throw new Error('Ошибка в name');
    } else {
      this.name = name;
    }
    const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!types.includes(type)) {
      throw new Error('Ошибка в type');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
  }
}
