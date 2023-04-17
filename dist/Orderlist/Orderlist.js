import { displayCart } from "../Animation/Cart/displayCart.js";
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
    addOrders(order) {
        this._orders.push(order);
        //Show Book order in the cart interface
        displayCart.showBooksOrder(order);
        console.log(this.orders);
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
    resetProducts() {
    }
    sellProducts() {
    }
}
let orderList = new Orderlist([], 0);
export { orderList };
