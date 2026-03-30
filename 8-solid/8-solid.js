class Billing {
  amount = 0;

  constructor(amount) {
    this.amount = amount;
  }

  calculateTotal() {
    return this.amount;
  }
}

class BillingHours extends Billing {
  #hours = 0;
  constructor(hours, amount) {
    super(amount);
    this.#hours = hours;
  }

  calculateTotal() {
    return this.amount * this.#hours;
  }
}

class BillingItems extends Billing {
  #items = 0;
  constructor(items, amount) {
    super(amount);
    this.#items = items;
  }

  calculateTotal() {
    return this.amount * this.#items;
  }
}

const amount = new Billing(10);
console.log(amount.calculateTotal());

const hours = new BillingHours(12, 15);
console.log(hours.calculateTotal());

const items = new BillingItems(20, 30);
console.log(items.calculateTotal());
