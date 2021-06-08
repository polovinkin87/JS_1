// Блок создания корзины
function basketProd(fruit_name, price, count) {
    this.fruit_name = fruit_name;
    this.price = price;
    this.count = count;
}

banana = new basketProd('banana', 60, 6.5);
apple = new basketProd('apple', 53, 14);
pear = new basketProd('pear', 160, 3.2);
kiwi = new basketProd('kiwi', 145, 6)

function Basket() {
    this.list = {};
    this.addOneProduct = function AddProduct(product) {
        this.list[product.fruit_name] = product;
    }
    this.addSeveralProduct = function AddProduct(product) {
        for (let i of product) {
            this.list[i.fruit_name] = i;
        }
    }
    this.deleteProduct = function DeleteProduct(product) {
        delete this.list[product.fruit_name];
    }
    this.totalPriceOfProducts = function TotalPriceOfProducts() {
        totalPrice = 0;
        for (var p in this.list) {
            totalPrice += this.list[p].price * this.list[p].count;
        }
        return totalPrice;
    }

    this.countOfProducts = function () {
        return Object.keys(this.list).length;
    }
}

basket = new Basket();
basket.addSeveralProduct([banana, apple, pear, kiwi]);

// Блок генерации корзины на странице
let mainBlock = document.querySelector('body');
let basketWindow;

function addBasketWindow() {
    basketWindow = document.createElement('div');

    if (basket.countOfProducts() === 0) {
        basketWindow.innerHTML = '<p>В корзине ничего нет<p>'

    }
    else {
        basketWindow.innerHTML = '<p>' + 'В корзине: ' + basket.countOfProducts() + ' товаров на сумму ' + basket.totalPriceOfProducts() + ' рублей' + '<p>';
    }
    mainBlock.appendChild(basketWindow)
}

addBasketWindow()