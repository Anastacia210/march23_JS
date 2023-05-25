// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
class User {
    constructor (id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
console.log(User);
let users = [
    new User(1, 'vasya', 'vasin', 'abc@mail.com', '123-31-56'),
    new User(2, 'kolya', 'kolin', 'def@mail.com', '124-31-56'),
    new User(3, 'petya', 'petin', 'ghi@mail.com', '125-31-56'),
    new User(4, 'olya', 'olina', 'jkl@mail.com', '126-31-56'),
    new User(5, 'anna', 'anina', 'mno@mail.com', '127-31-56'),
    new User(6, 'pasha', 'pashin', 'pqr@mail.com', '128-31-56'),
    new User(7, 'vera', 'verina', 'stu@mail.com', '129-31-56'),
    new User(8, 'katya', 'katina', 'vwx@mail.com', '122-31-56'),
    new User(9, 'oleg', 'olegin', 'yzd@mail.com', '121-31-56'),
    new User(10, 'marina', 'marinina', 'joy@mail.com', '120-31-56')
];
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterUserId = users.filter(user => user.id%2 === 0);

console.log(filterUserId);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = users.sort(function (user1,user2){
    return user1.id - user2.id;
});
console.log(sort);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order
    }
}
console.log(Client);
let clients = [
    new Client(1, 'vasya', 'vasin', 'abc@mail.com', '123-31-56', 5),
    new Client(2, 'kolya', 'kolin', 'def@mail.com', '124-31-56', 8),
    new Client(3, 'petya', 'petin', 'ghi@mail.com', '125-31-56', 4),
    new Client(4, 'olya', 'olina', 'jkl@mail.com', '126-31-56', 9),
    new Client(5, 'anna', 'anina', 'mno@mail.com', '127-31-56', 12),
    new Client(6, 'pasha', 'pashin', 'pqr@mail.com', '128-31-56', 1),
    new Client(7, 'vera', 'verina', 'stu@mail.com', '129-31-56', 17),
    new Client(8, 'katya', 'katina', 'vwx@mail.com', '122-31-56', 3),
    new Client(9, 'oleg', 'olegin', 'yzd@mail.com', '121-31-56', 20),
    new Client(10, 'marina', 'marinina', 'joy@mail.com', '120-31-56', 11)
];
console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let clientSort = clients.sort(function (client1, client2) {
    return client1.order - client2.order;
});
console.log(clientSort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car (model, manufacturer, year, maxSpeed, volumeEngine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volumeEngine = volumeEngine;

    this.drive = function (){
        console.log('Їдемо зі швидкістю', this.maxSpeed, 'на годину')
    };
    this.drive();

    this.info = function (){
        console.log(`
 			model : ${this.model}
 			manufacturer : ${this.manufacturer}
 			year : ${this.year}
 			maxSpeed : ${this.maxSpeed}
 			volumeEngine : ${this.volumeEngine}
 			`)};
    this.info();

    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed = newSpeed;
    }
    this.increaseMaxSpeed(200);

    this.changeYear = function (newValue){
        this.year = newValue;
    }
    this.changeYear(2020);

    this.addDriver = function (driver){
        this.driver = driver;
    }
    this.addDriver('Anastacia');

}
function Driver (name, age){
    this.name = name;
    this.age = age;
}

let car = new Car("Ranger Raptor", "Ford", 2019, '175 км', "1996 см3")
console.log(car);

let driver = new Driver('Anastacia', 36)
console.log(driver);
console.log('________________________________');

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Mashina {
    constructor(model, manufacturer, year, maxSpeed, volumeEngine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volumeEngine = volumeEngine;
    };
    drive (){
        console.log('Їдемо зі швидкістю', this.maxSpeed, 'на годину')
    };
    info (){
        console.log(`
 			model : ${this.model}
 			manufacturer : ${this.manufacturer}
 			year : ${this.year}
 			maxSpeed : ${this.maxSpeed}
 			volumeEngine : ${this.volumeEngine}
 			`)
    };
    increaseMaxSpeed (newSpeed){
        this.maxSpeed = newSpeed;
    };
    changeYear (newValue){
        this.year = newValue;
    };
    addDriver (driver1){
        this.addDriver = driver1;
    }

}
let car1 = new Mashina("Kuga", "Ford", 2017, '150 км', "1.5 л")
console.log(car1);

class Voditel {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let driver1 = new Voditel('Anastacia', 36)
console.log(driver1);

car1.info();
car1.drive();
car1.increaseMaxSpeed(190);
car1.changeYear(2020);
car1.addDriver('Anastacia');

console.log('-----------------------------')

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}
let ladies = [
    new Cinderella('Stacy', 34, 38),
    new Cinderella('Alex', 17, 37),
    new Cinderella('Anna', 37, 36),
    new Cinderella('Lera', 31, 38),
    new Cinderella('Julia', 20, 36),
    new Cinderella('Olga', 37, 35),
    new Cinderella('Sasha', 19, 39),
    new Cinderella('Maria', 25, 40),
    new Cinderella('Irina', 27, 41),
    new Cinderella('Mila', 41, 34),
]
console.log(ladies);

class Prince {
    constructor(name, age, foundshoe) {
        this.name = name;
        this.age = age;
        this.foundshoe = foundshoe;
    }
}
let prince = new Prince('Valentin', 22, 39);
console.log(prince);

let filterGirlSize = ladies.filter(girl => girl.footsize === prince.foundshoe);
console.log(filterGirlSize);