// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let var1 = 'hello';
let var2 = 'owu';
let var3 = 'com';
let var4 = 'ua';
let var5 = 1;
let var6 = 10;
let var7 = -999;
let var8 = 123;
let var9 = 3.14;
let var10 = 2.7;
let var11 = 16;
let var12 = true;
let var13 = false;
console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);
console.log(var6);
console.log(var7);
console.log(var8);
console.log(var9);
console.log(var10);
console.log(var11);
console.log(var12);
console.log(var13);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Анастасія';
let middleName = 'Сергіївна';
let lastName = 'Яцюк';
let person = (`${firstName} ${middleName} ${lastName}`);
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let uName = prompt("Enter Your name");
let uMiddleName = prompt("Enter Your middle name");
let uAge = parseInt(prompt("Enter your age"));
console.log(uName, uMiddleName, uAge);
// alert ("Вітаю, " + uName + ' ' + uMiddleName + ". " + "Тобі " + uAge + " років.")