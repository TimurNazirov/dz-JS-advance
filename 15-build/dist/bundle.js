(function () {
  'use strict';

  class Task {
    constructor(message) {
      this.message = message;
    }
    run() {
      console.log(this.message);
    }
  }

  class User {
    constructor(task) {
      this.task = task;
    }

    do() {
      console.log("Приступаем к работе");
      this.task.run();
    }
  }

  // Создаем конкретную задачу
  const myTask = new Task("Модульность пройдена");

  // Создаем пользователя и "вручаем" ему эту задачу
  const user = new User(myTask);

  // Запускаем процесс
  user.do();

})();
