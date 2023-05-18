// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str = 'hello world';
console.log(str.length);
let str1 = 'lorem ipsum';
console.log(str1.length);
let str2 = 'javascript is cool';
console.log(str2.length);
console.log('____________________');
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let toUpperCase = str.toUpperCase('hello world');
console.log(toUpperCase);
let toUpperCase1 = str1.toUpperCase('lorem ipsum');
console.log(toUpperCase1);
let toUpperCase2 = str2.toUpperCase('javascript is cool');
console.log(toUpperCase2);
console.log('____________________');
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let toLowerCase = str.toLowerCase('HELLO WORLD');
console.log(toLowerCase);
let toLowerCase1 = str1.toLowerCase('LOREM IPSUM');
console.log(toLowerCase1);
let toLowerCase2 = str2.toLowerCase('JAVASCRIPT IS COOL');
console.log(toLowerCase2);
console.log('____________________');
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str3 = ' dirty string   ';
let trim = str3.trim();
console.log(trim);
console.log('____________________');
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str4 = 'Ревуть воли як ясла повні';
let split = str4.split(' ');
console.log(split);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arrOfNums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const string = arrOfNums.map((value) => {
    value = value.toString();
    return value;
});
console.log(string);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
const nums = [11, 21, 3];
const sortNums = nums.sort(function (a, b) {
    return a - b;
});
console.log(sortNums);

const sortNums2 = nums.sort(function (a, b) {
    return b - a;
});
console.log(sortNums2);

// ==========================

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
const monthDuration = coursesAndDurationArray.sort(function (a, b) {
    return b.monthDuration - a.monthDuration
});
console.log(monthDuration);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
for (const item of coursesAndDurationArray) {
    if (item.monthDuration > 5) {
        console.log(item)
    }
}

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const arr = coursesAndDurationArray.map((item, index) => ({id: index + 1, ...item}));
console.log(arr);

//     описати колоду карт (від 6 до туза без джокерів)
const cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
];
// - знайти піковий туз
const card1 = cards.find((card) => card.cardSuit === 'spade' && card.value === 'ace');
console.log(card1);

// - всі шістки
const arr1 = cards.filter((card) => card.value === '6');
console.log(arr1);

// - всі червоні карти
const arr2 = cards.filter((card) => card.color === 'red');
console.log(arr2);

// - всі буби
const arr3 = cards.filter((card) => card.cardSuit === 'diamond');
console.log(arr3);

// - всі трефи від 9 та більше
const arr4 = cards.filter((card) =>
    ['9', '10', 'ace', 'king', 'queen', 'jack'].includes(card.value) && card.cardSuit === 'clubs');
console.log(arr4);

// =========================
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
// =========================

//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const arr5 = cards.reduce((acc, cu) => {
    switch (cu.cardSuit) {
        case 'spade':
            acc.spades.push(cu);
            break
        case 'diamond':
            acc.diamonds.push(cu);
            break
        case 'heart':
            acc.hearts.push(cu);
            break
        case 'clubs':
            acc.clubs.push(cu);
            break
    }
    return acc;
}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(arr5);
// ______________________________________________________________________________________________________________
const arr6 = cards.reduce((acc, cu) => {acc[cu.cardSuit].push(cu);
    return acc;
}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(arr6);
// =========================

//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
const arr7 = coursesArray.filter((item) => item.modules.includes('sass'));
console.log(arr7);
// --написати пошук всіх об'єктів, в який в modules є docker
const arr8 = coursesArray.filter((item) => item.modules.includes('docker'));
console.log(arr8);