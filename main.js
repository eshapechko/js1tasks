// Задание 2
// Запросите у пользователя его имя. Выведите в окошке (с помощью функции alert) фразу: Привет, Николай! (вместо Николай должно показываться имя, которое ввел пользователь)
let user = prompt("Ваше имя ?");
alert("Привет " + user);

// Задание 3
// Запросите у пользователя число. Затем запросите степень, в которую нужно возвести это число. Выведите в консоль результат.
let user1 = prompt("Напишите число");
let degreeNumber = prompt("Напишите степень числа");
console.log(user1 ** degreeNumber);

// Задание 5
// Создать произвольную переменную, присвоить ей произвольное строковое значение. C помощью if написать условие: если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let name1 = "Nick";
if (name1 === "hidden") {
  console.log("visible");
} else {
  console.log("hidden");
}

// Задание 6
// Создать переменную и присвоить ей число.
// Записать условие:
// - если переменная равна нулю, присвоить ей 1;
// - если меньше нуля - строку “less then zero”;
// - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
let num = 5;
if (num === 0) {
  console.log((num = 1));
} else if (num < 0) {
  console.log("less then zero");
} else if (num > 0) {
  console.log((num *= 10));
}

// Задание 7
// Запросите у пользователя число и запишите его в переменную.
// (Не забывайте, что от пользователя мы всегда получаем строку).
// Создайте переменную-результат и присвойте ей значение: если введенное пользователем число меньше 5, то результат будет '0', если больше -  '1'. Выведите результат в консоль.
let user2 = +prompt("Напишите число");
let result;
if (user2 < 5) {
  console.log((result = 0));
} else {
  console.log((result = 1));
}

// Задание 8
// Попросить пользователя ввести одно число, следом - второе число. Вывести в консоль максимальное из чисел (наибольшее) с текстом: Большее число: 7 (вместо 7 будет максимальное число из введенных пользователем).
// * предусмотреть вариант ввода одинаковых чисел
let num1 = +prompt("Введите число 1");
let num2 = +prompt("Введите число 2");
let result1;
if (num1 >= num2) {
  console.log("Большее число: " + num1);
} else {
  console.log("Большее число: " + num2);
}

// Задание 9
// Определить, является ли введенное пользователем число num1 кратным введенному числу num2. Обе переменные запрашиваем у пользователя, ответ выводим в консоль.
let num3 = +prompt("Введите число ");
let num4 = +prompt("Введите число ");
if (num3 % num4 === 0) {
  console.log(num3 + " кратно " + num4);
} else if (num3 % num4 !== 0) {
  console.log(num3 + " некратно " + num4);
}

// Задание 10
// Запросить у пользователя средний балл, записать в переменную.
// Если средний балл 1-4 - вывести в консоль "Двоечник, иди учись!", если 5-8 - "Неплохо, но давай еще поднажмем!", если 9-10 - "Ого, да ты настоящий отличник!" (можно другие фразы - по желанию).
let n = +prompt("Какой ваш средний балл?");
if (n <= 4) {
  console.log("Двоечник, иди учись!");
} else if ((n >= 5, n < 9)) {
  console.log("Неплохо, но давай еще поднажмем!");
} else if (n > 8) {
  console.log("Ого, да ты настоящий отличник!");
}

// Задание 11
// Запросить у пользователя ответы на 2 вопроса:
// - балл за экзамен (от 0 до 100)
// - количество выполненных проектов (от 0 и больше)
// Вывести в консоль общий выпускной балл в соответствии с этими значениями:
// - 100, если балл за экзамен более 90 или количество проектов более 10.
// - 90, если балл за экзамен более 75 и количество проектов не менее 5.
// - 75, если балл за экзамен более 50 и количество проектов не менее 2.
// - 0 во всех других случаях.
let n1 = +prompt("Балл за экзамен?");
let n2 = +prompt("Количество выполненных проектов?");
let result100 = 100;
let result90 = 90;
let result75 = 75;
let result0 = 0;
if (n1 > 90 || n2 > 10) {
  console.log("Общий выпускной балл " + result100);
} else if (n1 >= 75 && n2 >= 5) {
  console.log("Общий выпускной балл " + result90);
} else if (n1 >= 50 && n2 >= 2) {
  console.log("Общий выпускной балл " + result75);
} else {
  console.log("Общий выпускной балл " + result0);
}

// Задание 12
// День аренды автомобиля стоит $40. При аренде на 7 или больше дней вы получаете общую итоговую скидку $50. Если вы арендуете авто на 3 или более дней, ваша общая скидка составит $20.
// Количество дней, на которые нужно арендовать авто, запрашиваются с помощью prompt. Напишите программу, рассчитывающую общую стоимость аренды на запрашиваемое количество дней.
let rent = 40;
let userCarRent = +prompt("На сколько дней вы хотите арендовать машину?");
let sum = rent * userCarRent;
if (userCarRent >= 7) {
  console.log("$" + (sum - 50));
} else if (userCarRent >= 3) {
  console.log("$" + (sum - 30));
} else {
  console.log("$" + sum);
}
