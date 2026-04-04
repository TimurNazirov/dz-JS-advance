const users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];

const usersId = [...new Map(users.map((user) => [user.id, user])).keys()];
const newUsers = usersId.map((id) => users.find((user) => user.id === id));
console.log(newUsers);
