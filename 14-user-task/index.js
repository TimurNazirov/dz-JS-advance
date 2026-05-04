import { Task } from "./task";
import { User } from "./user";

// Создаем конкретную задачу
const myTask = new Task("Модульность пройдена");

// Создаем пользователя и "вручаем" ему эту задачу
const user = new User(myTask);

// Запускаем процесс
user.do();
