//Задание 1
//var a = 1, b = 1, c, d;
//c = ++a; alert(c);           // 2
//d = b++; alert(d);           // 1
//c = (2 + ++a); alert(c);      // 5
//d = (2 + b++); alert(d);      // 4
//alert(a);                    // 3
//alert(b);                    // 3
//Код дает такие результаты потому что, переменная хранит не сам объект, а его «адрес в памяти», другими словами «ссылку» на него.
//Когда переменная объекта копируется – копируется ссылка, сам же объект не дублируется.

//Задание 2
//var a = 2;
//var x = 1 + (a *= 2);
//В консоль выведет х = 5 (1 + 2*2)

//Задание 3
//a = Math.floor(Math.random() * 100)
//b = -Math.floor(Math.random() * 100)
//console.log(a)
//console.log(b)

//if (a >= 0 && b >= 0) {
//    console.log(a - b)
//} else if (a < 0 && b < 0) {
//    console.log(a * b)
//} else {
//    console.log(a + b)
//}

//Задание 4
//a = Math.floor(Math.random() * 15)

//switch (a) {
//    case 1:
//       console.log(a++);
//    case 2:
//        console.log(a++);
//    case 3:
//        console.log(a++);
//    case 4:
//        console.log(a++);
//    case 5:
//        console.log(a++);
//    case 6:
//        console.log(a++);
//    case 7:
//        console.log(a++);
//    case 8:
//        console.log(a++);
//    case 9:
//        console.log(a++);
//    case 10:
//       console.log(a++);
//    case 11:
//        console.log(a++);
//    case 12:
//        console.log(a++);
//    case 13:
//        console.log(a++);
//    case 14:
//        console.log(a++);
//    case 15:
//        console.log(a);
//}

//Задание 5
//sum = function sumDouble(a, b) {
//    return a + b;
//}
//sub = function subDouble(a, b) {
//    return a - b;
//}
//div = function divDouble(a, b) {
//    return a / b;
//}
//mult = function multDouble(a, b) {
//    return a * b;
//}

//Задание 6
//function arifmeticOperation(x, y, operation) {
//    switch (operation) {
//        case "сложение":
//            return sum(x, y);
//        case "вычитание":
//            return sub(x, y);
//        case "деление":
//            return div(x, y);
//        case "умножение":
//            return mult(x, y);
//    }
//}

//Задание 7
//console.log(null > 0); // false
//console.log(null == 0); // false
//console.log(null >= 0); // true
//Я не могу такое объяснить ))

//Задание 8
function power(val, pow) {
    if (pow !== 1) {
        return val * power(val, pow - 1);
    }
    return val;
}

console.log(power(2, 8))

