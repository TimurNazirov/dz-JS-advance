class Character {
  constructor(name, language, race) {
    this.name = name;
    this.language = language;
    this.race = race;
  }

  speak() {
    console.log(
      `${this.name} (${this.race}) говорит на языке ${this.language}`,
    );
  }
}

class Ork extends Character {
  constructor(name, weapon) {
    super(name, "Оркский", "Орк");
    this.weapon = weapon;
  }

  speak() {
    super.speak();
    console.log(`${this.name} кричит: ЗА ОРДУ!`);
  }

  bite() {
    console.log(`${this.name} имеет оружие: ${this.weapon}`);
  }
}

class Elf extends Character {
  constructor(name, spell) {
    super(name, "Эльфийский", "Эльф");
    this.spell = spell;
  }

  speak() {
    super.speak();
    console.log(`${this.name} шепчет: "Да пребудет с тобой свет звезд".`);
  }

  cast() {
    console.log(`${this.name} выпускает магию: ${this.spell}`);
  }
}

const human = new Character("Человек", "Гендальф", "Английский");
const ork = new Ork("Гаррош", "Лезвие");
const elf = new Elf("Леголас", "Стрела");

ork.speak(); // "Гаррош (Орк) говорит на языке: Оркский"
elf.speak(); // "Леголас (Эльф) говорит на языке: Эльфийский"
ork.bite(); // "Гаррош бьет оружием: Лезвие"
elf.cast();
