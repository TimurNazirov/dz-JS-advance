// ДОМАШНЕЕ ЗАДАНИЕ
const targetDate = new Date(2027, 0, 1);
const locale = "ru-RU";

// Названия для склонений (можно расширить для других языков)
const labels = {
  "ru-RU": {
    month: ["месяц", "месяца", "месяцев"],
    day: ["день", "дня", "дней"],
    hour: ["час", "часа", "часов"],
    minute: ["минута", "минуты", "минут"],
    second: ["секунда", "секунды", "секунд"],
  },
};

function getIntlWord(number, unit, lang) {
  const pluralRules = new Intl.PluralRules(lang);
  const key = pluralRules.select(number); // 'one', 'few', 'many', 'other'

  // Карта соответствия ключей Intl нашим массивам [one, few, many]
  const indexMap = { one: 0, few: 1, many: 2, other: 2 };
  return labels[lang][unit][indexMap[key]];
}

const timer = setInterval(() => {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    clearInterval(timer);
    console.log("Happy New Year! 🎄");
    return;
  }

  // Расчет компонентов
  let months =
    (targetDate.getFullYear() - now.getFullYear()) * 12 +
    (targetDate.getMonth() - now.getMonth());
  let days = targetDate.getDate() - now.getDate();
  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  }

  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  console.clear();
  console.log(
    `${months} ${getIntlWord(months, "month", locale)}, ` +
      `${days} ${getIntlWord(days, "day", locale)}, ` +
      `${hours} ${getIntlWord(hours, "hour", locale)}, ` +
      `${mins} ${getIntlWord(mins, "minute", locale)}, ` +
      `${secs} ${getIntlWord(secs, "second", locale)}`,
  );
}, 1000);
