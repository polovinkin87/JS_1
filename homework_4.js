//Задание 1
//function numberInObject(el) {
//    if (!Number.isInteger(el) || el < 0 || el > 999) {
//        console.log('Число должно быть целым от 0 до 999');
//        return {};
//    }
//    return {
//        units: el % 10,
//        tens: Math.floor(el / 10) % 10,
//        hundreds: Math.floor(el / 100),
//    };
//}
//console.log(numberInObject(245));

// Задание 2
const basketWeb = {
    fruits: [
        {
            fruit_name: 'banana',
            price: 60,
            count: 6.5
        },
        {
            fruit_name: 'apple',
            price: 53,
            count: 14
        },
        {
            fruit_name: 'pear',
            price: 160,
            count: 3.2
        },
        {
            fruit_name: 'kiwi',
            price: 145,
            count: 6
        }
    ],
    basketSumm() {
        return this.fruits.reduce(function (summFruits, fruitItem) { return summFruits + fruitItem.price * fruitItem.count; }, 0);
    }
};

console.log(basketWeb.basketSumm());