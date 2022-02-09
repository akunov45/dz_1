//Регулярные выражения
// тут создали шаблон
let patternPhone = /^\+996\s\d{3}\s\d{2}-\d\d-\d{2}/;
//наш номер должен начинатся с +996 пробел 3цифра подряд и дальше
//получаем инпут из ДОМ элемента
const phoneInput = document.querySelector('#phone');
//получаем кнопку из ДОМа
const button = document.querySelector('button');
// Событие на клик кнопку ипроверка нашего шаблона
button.onclick = () => {
	if (patternPhone.test(phoneInput)) {
		console.log('⇚ KG номер ');
	} else {
		console.log('⇚ другой номер');
	}
};
//событие для инпута при изминение нашего инпута
phoneInput.addEventListener('change', e => {
	if (patternPhone.test(e.target.value)) {
		console.log('⇚  KG номер');
	} else {
		console.log('⇚ ne naiden ');
	}
});

let arr = [3, 2, 1];
//         0 1 2 - это индексы массива

// самый базовый пример это создать counter через рекурсии
// let count = 0;
// function recursion() {
// 	count++;
// 	console.log(count, '⇚ ');
// 	if (count === 10) {
// тут очевидно что если переменная count будет равен 10и то выйдем из рекурсии
// 		return;
// 	} else {
// 		return recursion();
// 	}
// }
// recursion();

// function recursion(arr) {

// 	console.log(arr.shift(), '⇚ ');
//Метод shift() удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива.
// 	if (arr.length !== 0) {
//-------удаляет элемент каждый вызов рекурсии
// 		recursion(arr);
// 	}
// }

// function recursion2(arr) {
// 	let sum = arr.shift();
//  в переменную sum вернется значение из массива читаем 31ю строку
// 	// console.log(arr.shift(), '⇚ ');
// 	if (arr.length !== 0) {
// 		sum += recursion2(arr);
// 	}
// 	return sum;
// }
// console.log(recursion2([1, 2, 3, 4]), '⇚ '); //10

// console.log(Math.pow(2, 3), '⇚ ');

// function pow(x, y) {
// 	if (y === 1) {
// 		return x;
// 	} else {
// 		//7*7*7 = 343
//    //y - это счетчик сколько раз мы вызываем функцию
// 		return x * pow(x, y - 1);
// 	}
// }

// console.log(pow(7, 3), '⇚ pow');

//JSON  (JavaScript Object Notation)
let user = {
	name: 'Alex',
	age: 25,
};

// localStorage.setItem('user', user);
//у JSON а есть два метода 1 JSON.stringify для преобразования объектов в JSON. {"name": "Alex","age":"25"}
// localStorage.setItem('user', JSON.stringify(user));

// 2 JSON.parse для преобразования JSON обратно в объект.
// let user2 = JSON.parse(localStorage.getItem('user'));

// console.log(user2, '⇚ u2');

// console.log(user2.name, '⇚ name ');
