// 3-birthday
// const userBirthday = "2022-01-01";

// function checkAge(userBirthday) {
//   const now = new Date();
//   const birth = new Date(userBirthday);

//   let age = now.getFullYear() - birth.getFullYear();

//   const monthDiff = now.getMonth() - birth.getMonth();

//   const dayDiff = now.getDate() - birth.getDate();

//   if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
//     age--;
//   }
//   return age >= 14;
// }
// console.log(checkAge(userBirthday));


function checkAge(userBirthday) {
  const minDate = new Date(userBirthday);
  minDate.setFullYear(minDate.getFullYear() + 14); // Дата, когда исполнится 14
  
  return new Date() >= minDate; // Наступила ли она уже?
}
