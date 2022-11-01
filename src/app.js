import Character from './Character';
import Bowerman from './Bowerman';
import Daemon from './Daemon';
import Magician from './Magician';
import Zombie from './Zombie';
import Undead from './Undead';
import Swordsman from './Swordsman';

test('Наследуется от Character', () => {
  expect(new Zombie('tor', 'Zombie')).toBeInstanceOf(Character);
});

test('Наследуется от Character', () => {
  expect(new Undead('tor', 'Undead')).toBeInstanceOf(Character);
});

test('Создание нового персонажа Zombie', () => {
  const received = new Zombie('tor', 'Zombie');
  const expected = {
    name: 'tor',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Bowerman', () => {
  const received = new Bowerman('tor', 'Bowerman');
  const expected = {
    name: 'tor',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Undead', () => {
  const received = new Undead('tor', 'Undead');
  const expected = {
    name: 'tor',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Swordsman', () => {
  const received = new Swordsman('tor', 'Swordsman');
  const expected = {
    name: 'tor',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Magician', () => {
  const received = new Magician('tor', 'Magician');
  const expected = {
    name: 'tor',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Daemon', () => {
  const received = new Daemon('vova', 'Daemon');
  const expected = {
    name: 'vova',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('Тип Character', () => {
  const received = typeof Character;
  const expected = 'function';
  expect(received).toBe(expected);
});

test('Проверка свойств', () => {
  const magic = new Magician('tor', 'Magician');
  const received = magic.attack;
  const expected = 10;
  expect(received).toBe(expected);
});

test('Ошибка в name', () => {
  const errName = { name: 'A', type: 'Bowerman' };
  expect(() => {
    const bow = new Character(errName);
    return bow;
  }).toThrow();
});

test('Ошибка в name', () => {
  const errName = { name: 4, type: 'Bowerman' };
  expect(() => {
    const bow = new Character(errName);
    return bow;
  }).toThrow();
});

test('Ошибка в name', () => {
  const errName = { name: 'vovapatriot', type: 'Bowerman' };
  expect(() => {
    const bow = new Character(errName);
    return bow;
  }).toThrow();
});

test('Ошибка в type', () => {
  const errType = { name: 'tor', type: 'Bow' };
  expect(() => {
    const bow = new Character(errType);
    return bow;
  }).toThrow();
});

test('Ошибка в type', () => {
  expect(() => {
    const bow = new Daemon('tor', 'mon');
    return bow;
  }).toThrow();
});
