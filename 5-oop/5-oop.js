function Character(rase, name, language) {
  this.name = name;
  this.language = language;
  this.race = rase;
}

Character.prototype.speak = function () {
  console.log(`${this.name} (${this.race}) говорит на языке ${this.language}`);
};

function Ork(name, weapon) {
  Character.call(this, "Орк", name, "Оркский");
  this.weapon = weapon;
}

Ork.prototype = Object.create(Character.prototype);
Ork.prototype.constructor = Ork;

Ork.prototype.bite = function () {
  console.log(`${this.name} имеет оружие: ${this.weapon}`);
};

function Elf(name, spell) {
  Character.call(this, "Эльф", name, "Эльфиский");
  this.spell = spell;
}

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.cast = function () {
  console.log(`${this.name} выпускает магию: ${this.spell}`);
};

const human = new Character("Человек", "Гендальф", "Английский");
const ork = new Ork("Гаррош", "Лезвие");
const elf = new Elf("Леголас", "Стрела");

ork.speak(); // "Гаррош (Орк) говорит на языке: Оркский"
elf.speak(); // "Леголас (Эльф) говорит на языке: Эльфийский"
ork.bite(); // "Гаррош бьет оружием: Лезвие"
elf.cast();
