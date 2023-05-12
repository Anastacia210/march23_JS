// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle(a, b) {
    return a * b;
}

let res = rectangle(7, 17);
console.log(res);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(r) {
    return Math.PI * (r * r);
}

let res1 = circle(7);
console.log(res1);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cyl(r, h) {
    return 2 * Math.PI * r * (r + h);
}

let res2 = cyl(7, 13);
console.log(res2);
// - створити функцію яка приймає масив та виводить кожен його елемент
let array = ['qwe', 'asd', 'zxc'];
let funArr = arr => {
    console.log(arr);
    for (const arrElement of arr) {
        console.log(arrElement);
    }
};
funArr(array)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createP(msg) {
    document.write(`<p>${msg}</p>`);
}

createP('Hello OKTEN');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUl(list) {
    document.write(`<ul>
            <li>${list}</li>
            <li>${list}</li>
            <li>${list}</li>
        </ul>`);
}

createUl('Success doesn`t come to you...you go to it');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function writer(msg, sym) {
    document.write('<ul>');

    for (let i = 0; i < sym; i++) {
        document.write(`<li>${i + 1} - ${msg}</li>`);
    }
    document.write('</ul>');
}

writer('Success doesn`t come to you...you go to it', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function listIt(list) {
    for (const item of list) {
        document.write(`<li>${item}</li>`)
    }
}

listIt(['JS', 123, true, 'html', 345]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function userList(arr) {
    for (const item of arr) {
        document.write(`<div>${item.id}-${item.name}-${item.age}</div>`)
    }
};
userList([
    {id: 1, name: 'Nick', age: 38},
    {id: 2, name: 'Meggan', age: 45},
    {id: 3, name: 'Jack', age: 35},
    {id: 4, name: 'Lora', age: 37}
]);
// - створити функцію яка повертає найменьше число з масиву
const funMin = (array) => {
    let min = array[0];
    for (const funMinElement of array) {
        if (funMinElement < min) min = funMinElement;
    }
    return min;
};
const funMinRet = funMin([1, 15, 205, 41, 27845, 3154, -265]);
console.log(funMinRet);
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const funSumArr = (array) => {
    let i = 0;
    for (const arrayElement of array) {
        i += arrayElement;
    }
    return i;
};
const add = funSumArr([7, 14, 21, 35])
console.log(add);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    let a = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = a;
    return arr;
}

console.log(swap([14, 23, 32, 41], 1, 3));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange (sumUAH,currencyValues,exchangeCurrency){
    for (const item of currencyValues){
        if (item.currency===exchangeCurrency){
            return sumUAH/item.value;
        }
    }
}
const result = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');
console.log(result);






