// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let numbers = [36, 18, 88, 22, 40];
console.log(numbers);

let drinks = ['latte', 'tea', 'pepsi', 'sugar', 'drink'];
console.log(drinks);

let value = [18, false, 'music', 36, 'play'];
console.log(value);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let coffee = ['Latte', 'Americano', 'Espresso', 'Capuccino', 'Cold brew', 'Flat white'];
console.log(coffee [0]);
console.log(coffee [1]);
console.log(coffee [2]);
console.log(coffee [3]);
console.log(coffee [4]);
console.log(coffee [5]);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
/// ___________________________1________________________________

let nums = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < nums.length) {
    console.log(nums[i]);
    i++
}

console.log('_________________________');
// ____________________________2________________________________
for (let mass of nums) {
    console.log(mass);
}
console.log('__________________________');
// _________________________________3___________________________
j = 0;
while (j < nums.length){
    if (j%2 !== 0){
        console.log(nums[j]);
    }
    j++
}

console.log('___________________________');
// _______________________________4_____________________________________
for (let m = 0; m < nums.length; m++) {
    if (m%2 !== 0) {
        console.log(nums[m]);
    }
}

console.log('__________________________');
// ________________________________5____________________________________
u = 0;
while (u < nums.length){
    if (u%2 === 0){
        console.log(nums[u]);
    }
    u++
}

console.log('__________________________');
// __________________________________6____________________________________
for (let n = 0; n < nums.length; n++){
    if (n%2 === 0){
        console.log(nums[n]);
    }
}

console.log('__________________________');
// ___________________________________7_____________________________________
for (let k = 0; k < nums.length; k++){
    if (numbers[k]%3 === 0) {
        numbers[k] = 'okten';
        console.log(numbers[k]);
    }
}

console.log('_______________________');
// ______________________________________8_____________________________________
let arr = [2,17,13,6,22,31,45,66,100,-18];
for (let g = arr.length; g>=0; g--){
    console.log(arr[g]);
}
console.log('______________________');
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
const nums2 = [1, 25, 215, 25, 5, 25, 58, 5, 2, 52];
for (const number of nums2) {
    console.log(number);
}
console.log('______________________');
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
const strings = ['coffee', 'tea', 'chocolate', 'cocoa', 'lemonade', 'milk', 'herbal tea', 'mineral water', 'compote', 'ginger ale']
for (const string of strings) {
    console.log(string);
}
console.log('______________________');
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
const items = ['coffee', 13, 16, '37', 'lemonade', '55', true, false, 'milk', 99];
for (const item of items) {
    console.log(item);
}
console.log('_______________________');
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
 let massive = ['coffee', 13, 16, '37', 'lemonade', '55', true, false, 'milk', 99];
for (a = 0; a < massive.length; a++)
    if (typeof massive[a] === `boolean`){
        console.log(massive[a])
    }
console.log('_______________________');
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
 let massive1 = ['coffee', 13, 16, '37', 'lemonade', '55', true, false, 'milk', 99];
for (b = 0; b < massive1.length; b++)
    if (typeof massive1[b] === `number`){
        console.log(massive1[b])
    }
console.log('______________________');
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let massive2 = ['coffee', 13, 16, '37', 'lemonade', true, '55', false, 'milk', 99];
for (c = 0; c < massive2.length; c++)
    if (typeof massive2[c] === `string`){
        console.log(massive2[c])
    }
console.log('________________________');
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
emptyArr = [];
emptyArr[0] = "cat";
emptyArr[1] = true;
emptyArr[2] = 113;
emptyArr[3] = false;
emptyArr[4] = 25;
emptyArr[5] = "dog";
emptyArr[6] = true;
emptyArr[7] = 714;
emptyArr[8] = false;
emptyArr[9] = "asdfgh";
for (i = 0; i < emptyArr.length; i++){
    console.log(emptyArr[i]);
};
console.log('__________________________');
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++){
    console.log(`step:`, i);
    document.write(`step:`, i)
};
document.write(`<hr>`);
console.log('__________________________');
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 100; j++){
    console.log(`step :`, j );
    document.write(`step: ${j};  `)
};
document.write(`<hr>`);
console.log('_________________________');
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let n = 0; n < 100; n++){
    console.log(`step :`, n);
    document.write(`step: ${n};  `);
    n+=2;
};
document.write(`<hr>`);
console.log('_________________________');
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let m = 0; m < 100; m++){
    if (m%2 === 0) {
        console.log(`step :`, m)
        document.write(`step: ${m};  `);
    }
};
document.write(`<hr>`);
console.log('_________________________');
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let t = 0; t < 100; t++){
    if (t%2 === 1){
        console.log(`step:`, t);
        document.write(`step: ${t};  `);
    }
};
document.write(`<hr>`);
console.log('_________________________');
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор