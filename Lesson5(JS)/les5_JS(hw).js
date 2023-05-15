// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangle = (a, b) => a * b;
console.log(rectangle(7, 14));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circle = (r) => Math.PI * (r * r);
console.log(circle(19));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cyl = (r, h) => 2 * Math.PI * r * (r + h);
console.log(cyl(10, 20));

// - створити функцію яка приймає масив та виводить кожен його елемент
let array = ['kokos', 'abricos', 'ananas'];
let funArr = arr => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
};
funArr(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let createP = (msg) => document.write(`<p style="font-size: 25px; color: crimson">${msg}</p>`);
createP('Hello OKTEN');
document.write('_______________________');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createUl = (list) => document.write(`<ul>
             <li style="background-color: cyan; margin: 3px">${list}</li>
             <li style="background-color: cyan; margin: 3px">${list}</li>
             <li style="background-color: cyan; margin: 3px">${list}</li>
         </ul>`);
createUl('Success doesn`t come to you...you go to it');
document.write('_______________________');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let listIt = (msg, sym) => {
    document.write(`<ul style="border: 2px solid royalblue">`)
    for (let i = 0; i < sym; i++) {
        document.write(`<li>${i + 1} - ${msg}</li>`);
    }
    document.write(`</ul>`);
};
listIt('Success doesn`t come to you...you go to it', 3);
document.write('_______________________');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let listIt2 = (list) => {
    for (let item of list) {
        document.write(`<li style="border-bottom: 1px solid blueviolet">${item}</li>`)
    }
};
listIt2(['JS', 123, true, 'css', 365, false,]);
document.write('_______________________');

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrUser = (arr) => {
    for (let elem of arr) {
        document.write(`<div style="width: 200px; border: 1px solid darkviolet; margin: 5px">${elem.id}-${elem.name}-${elem.age}</div>`)
    }
};
arrUser([
    {id: 1, name: 'Irina', age: 40},
    {id: 2, name: 'Scott', age: 20},
    {id: 3, name: 'Jack', age: 60},
    {id: 4, name: 'Kate', age: 17}
]);
// - створити функцію яка повертає найменьше число з масиву
const funMin = (array) => {
    let min = array[0];
    for (const funMinElement of array) {
        if (funMinElement < min) min = funMinElement;
    }
    return min;
};
const funMinRet = funMin([11, 22, 33, 44, 55, 66, 77]);
console.log(funMinRet);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sumArr = (array) => {
    let i = 0;
    for (const arrayElement of array) {
        i += arrayElement;
    }
    return i;
};
const add = sumArr([1, 2, 3, 4, 5]);
console.log(add);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr, index1, index2) => {
    let a = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = a;
    return arr;
}

const res = swap([14, 23, 32, 41], 0, 1);
console.log(res);
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value;
        }
    }
}

const result = exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD');
console.log(result);