import { displayCart } from "../Animation/Cart/displayCart.js";
import { Receipt } from "../Animation/Receipt/receiptInterface.js";
import { user } from '../selectFav.js';
class Orderlist {
    _orders;
    _totalOrderList;
    constructor(_orders, _totalOrderList) {
        this._orders = _orders;
        this._totalOrderList = _totalOrderList;
    }
    get orders() {
        return this._orders;
    }
    get totalOrderList() {
        return this._totalOrderList;
    }
    set totalOrderList(value) {
        this._totalOrderList = value;
    }
    set orders(emptyArr) {
        this._orders = emptyArr;
    }
    addOrders(order, addToCartButton) {
        this._orders.push(order);
        //Show Book order in the cart interface
        displayCart.showBooksOrder(order, addToCartButton);
        /* console.log(addToCartButton) */
    }
    removeOrders(order) {
        const index = this._orders.findIndex(item => item === order);
        if (index !== -1) {
            this._orders.splice(index, 1);
        }
        else {
            console.error('The element does not exist');
        }
    }
    getTotalOrders() {
        let newValue = 0;
        this.orders.forEach(e => {
            newValue += e['quantity'] * e['book']['price'];
        });
        this.totalOrderList = newValue;
        return this.totalOrderList;
    }
    resetProducts() {
        /* this.orders.forEach(order => {
          const resettingNumber = -order.quantity
          order.quantity = resettingNumber
        }) */
        this.orders.forEach(e => {
            //updating orderQuantity
            /*  e.quantity = -(e.quantity) */
            //updating book stock and button
            e['book']['stock'] = e['quantity'];
            e['book']['cartButton']['resetButton']();
        });
        this.orders = [];
    }
    sellProducts() {
        //When this quantity is 0, the interface will hide the buy button, however, we do this for security lol
        let header = window.parent.document.querySelector('header');
        let recieptInfo = document.querySelector('.sold-info-container');
        recieptInfo.classList.remove('hide');
        header.classList.add('hide');
        //Creating new Receipt
        let newReciept = new Receipt(user.userName, new Date(), Math.random().toString());
        newReciept.showProducts();
        this.resetProducts();
    }
}
let orderList = new Orderlist([], 0);
export { orderList };
