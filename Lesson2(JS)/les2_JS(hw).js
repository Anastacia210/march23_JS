// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let mass = ['hello', 'owu', 'com', 'ua', 1, -999, 3.14, 16, true, false];
console.log(mass[0]);
console.log(mass[1]);
console.log(mass[2]);
console.log(mass[3]);
console.log(mass[4]);
console.log(mass[5]);
console.log(mass[6]);
console.log(mass[7]);
console.log(mass[8]);
console.log(mass[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Шаг за грань',
    pageCount: 416,
    genre: 'мистика'
};
console.log(book1);
let book2 = {
    title: 'Кладбище домашних животных',
    pageCount: 373,
    genre: 'ужасы'
};
console.log(book2);
let book3 = {
    title: 'Туман',
    pageCount: 252,
    genre: 'ужасы'
};
console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.

let book1_1 = {
    title: 'Шаг за грань',
    pageCount: 416,
    genre: 'мистика',
    authors: [
        {name: 'В.Поляков', age: 42},
        {name: 'Вл.Поляков', age: 41}
    ]
};
console.log(book1_1);
let book2_2 = {
    title: 'Кладбище домашних животных',
    pageCount: 373,
    genre: 'ужасы',
    author: [
        {name: 'Stephen King', age: 75},
        {name: 'S. King', age: 76}
    ]
};
console.log(book2_2);
let book3_3 = {
    title: 'Туман',
    pageCount: 252,
    genre: 'ужасы',
    authors: [
        {name: 'Stephen King', age: 75},
        {name: 'St. King', age: 75}]

};
console.log(book3_3);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Max', userName: 'Mx', password: 'jam'},
    {name: 'Joe', userName: 'Gj', password: 'loo'},
    {name: 'Tom', userName: 'TJ', password: 'Jerry'},
    {name: 'July', userName: 'Juice', password: 'tropic'},
    {name: 'Mila', userName: 'Milk', password: 'white'},
    {name: 'Irina', userName: 'Ira', password: 'rose'},
    {name: 'Sandra', userName: 'AleX', password: 'lex'},
    {name: 'Nick', userName: 'Kolya', password: 'Joy'},
    {name: 'Stacy', userName: 'Ana', password: 'Sunshine'},
    {name: 'Angela', userName: 'Ang', password: 'angel'}
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = +prompt('enter 1 or 0 or -3');
if (x !== 0) {
    console.log('Right')
} else {
    console.log('Wrong')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = +prompt('Enter minute from 0 to 59');
if (time <= 15) {
    console.log('first quarter');
} else if (time > 15 && time <= 30) {
    console.log('second quarter');
} else if (time > 30 && time <= 45) {
    console.log('third quarter');
} else if (time > 45 && time <= 59) {
    console.log('fourth quarter');
} else {
    console.log('Error!')
}

// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('Enter day from 1 to 31');
if (day <= 10) {
    console.log('first decade');
} else if (day > 10 && day <= 21) {
    console.log('second decade');
} else if (day > 21 && day <= 31) {
    console.log('third decade');
} else {
    console.log('Error!')
}

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
let weekTimetable = +prompt('Enter day of the week (1 - 7)')
switch (weekTimetable) {
    case 1:
        console.log('Monday: Work, New lesson, homework (part 1)');
        break;
    case 2:
        console.log('Tuesday: Work, Homework (part 2), lecture-resolve homework');
        break;
    case 3:
        console.log('Wednesday: Work, New lesson, homework (part 1)');
        break;
    case 4:
        console.log('Thursday: Work, Homework (part 2), lecture-resolve homework');
        break;
    case 5:
        console.log('Friday: Work, New lesson, homework (part 1)');
        break;
    case 6:
        console.log('Saturday: Homework (part 2), relax');
        break;
    case 7:
        console.log('Sunday: Relax:))');
        break;
    default:
        console.log('What is this?')
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let num1 = +prompt('Enter number');
let num2 = +prompt('Enter another number');
if (num1 > num2) {
    console.log(num1);
} else if (num1 === num2) {
    console.log('The numbers are equal');
} else {
    console.log(num2);
}
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"
//         якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const item of coursesAndDurationArray) {
    let term = +prompt('Enter term')
    if (term.monthDuration > 5) {
        console.log('Super!')
    }
}


