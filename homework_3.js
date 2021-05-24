//Задание 1
//let n = 2;
//while (n <= 100) {
//    let t = 1;
//    let isSimple = true;
//    while (t <= n) {
//        if (n % t === 0 && t !== 1 && t !== n) {
//            isSimple = false;
//            break;
//        }
//        t++;
//    }
//    if (isSimple) {
//        console.log(n);
//    }
//    n++;
//}

//Задание 2
//let basketWeb = [
//    ['banana', 60, 6.5],
//    ['apple', 53, 14],
//    ['pear', 160, 3.2],
//    ['kiwi', 145, 6]
//];

//function basketSumm() {
//    let summ = 0;
//    for (let i = 0; i < basketWeb.length; i++) {
//        summ += basketWeb[i][1] * basketWeb[i][2]
//    }
//    console.log(summ);
//}

//basketSumm();

//Задание 3
//for (let i = 0; i < 10; console.log(i++)) { };

//Задание 4
let piramid = '';
for (let i = 1; i <= 20; i++) {
    piramid += 'x'
    console.log(piramid)
};
