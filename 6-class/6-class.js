class Car {
  #brand;
  #model;
  #mileage = 0;
  constructor(brand, model, mileage) {
    this.#brand = brand;
    this.#model = model;
    this.#mileage = mileage;
  }

  get brand() {
    return this.#brand;
  }

  get model() {
    return this.#model;
  }

  get mileage() {
    return this.#mileage;
  }

  set mileage(value) {
    if (value < this.#mileage) {
      console.log("Нельзя установить такой пробег");
      return;
    }
    return (this.#mileage = value);
  }

  info() {
    console.log(
      `Марка ${this.brand}, модель ${this.model}, пробег ${this.mileage}`,
    );
  }
}

const info = new Car("Toyota", "Corolla", 100);
console.log(info.brand);
console.log(info.model);
console.log(info.mileage);
