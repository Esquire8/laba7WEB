let Name = "Сергей";
console.log(Name);

var a = 25, b = 73, c = a+b, d = b-a, e = a*b, f = b/a;
console.log(`Значение 1: ${a}, Значение 2: ${b}, Сумма: ${c}`);

let str = "privet";
console.log(str);
let newstr = str.toUpperCase();
console.log(newstr);

let str2 = "POKA";
console.log(str2);
let newstr2 = str2.toLowerCase();
console.log(newstr2);

console.log(`Значение 1: ${a}, Значение 2: ${b}, Разность: ${d}`);

console.log(`Значение 1: ${a}, Значение 2: ${b}, Умножение: ${e}`);

console.log(`Значение 1: ${b}, Значение 2: ${a}, Деление: ${f}`);

console.log(`Возведение в квадрат числа ${a} = ${a**2}`)

console.log(`Значение 1: ${15}, Значение 2: ${7}, Остаток деления: ${15%7}`);

function showMessage (name, years){
    console.log(`Меня зовут: ${name}. Мне ${years} лет`)
}
showMessage("Сергей", 19);


function showMassive(){
    var array = [13, 2, 14, 23, 98, 7, 3, 56, 19];
    console.log(`Массив: [${array}]`);
console.log("Вывод только четных чисел массива:",
    array.filter(element => !(element % 2)))
}
showMassive();
