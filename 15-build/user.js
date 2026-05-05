export class User {
  constructor(task) {
    this.task = task;
  }

  do() {
    console.log("Приступаем к работе");
    this.task.run();
  }
}
