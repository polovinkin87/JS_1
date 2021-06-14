// БЛОК СОЗДАНИЯ КОРЗИНЫ
function Product(name, article, color, size, text, price) {
    this.name = name;
    this.article = article;
    this.color = color;
    this.size = size;
    this.text = text;
    this.price = price;
}

function Basket() {
    this.list = {};
    this.addOneProduct = function AddProduct(product) {
        this.list[product.name] = product;
    }
    this.addSeveralProduct = function AddProduct(product) {
        for (let i of product) {
            this.list[i.name] = i;
        }
    }
    this.deleteProduct = function DeleteProduct(product) {
        delete this.list[product.name];
    }
    this.totalPriceOfProducts = function TotalPriceOfProducts() {
        totalPrice = 0;
        for (var p in this.list) {
            totalPrice += this.list[p].price;
        }
        return totalPrice;
    }

    this.countOfProducts = function () {
        return Object.keys(this.list).length;
    }
}


// БЛОК ГЕНЕРАЦИИ КОРЗИНЫ НА СТРАНИЦЕ
let mainBlock = document.querySelector('body');
let basketWindow;

function addBasketWindow() {
    basketWindow = document.createElement('div');

    if (basket.countOfProducts() === 0) {
        basketWindow.innerHTML = '<p>В корзине ничего нет<p>'

    }
    else {
        basketWindow.innerHTML = '<p>' + 'В козине: ' + basket.countOfProducts() + ' товаров на сумму ' + basket.totalPriceOfProducts() + ' рублей' + '<p>';
    }
    mainBlock.appendChild(basketWindow)
}


// БЛОК СОЗДАНИЯ ТОВАРОВ

banana = new Product('banana', 9898, 'yellow', '3', 'title banana', 50);
kiwi = new Product('kiwi', 6726, 'greeen', '5', 'title kiwi', 90);

basket = new Basket();

let catalog = [];
catalog.push(banana, kiwi);

let addProductButtom = document.querySelectorAll('.buttom');
for (b of addProductButtom) {

    b.addEventListener('click', (e) => {
        let productName = e.target.parentElement.firstElementChild.innerText;
        for (let i of catalog) {
            if (i.name === productName) {
                basket.addOneProduct(i)
                alert('В корзину добавлен товар - ' + i.name)
                alert('В корзине ' + basket.countOfProducts() + ' продуктов' + ' на сумму ' + basket.totalPriceOfProducts())
            }
        }
    })

}