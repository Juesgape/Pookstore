import { Book } from "src/Book/Book"
import {Order} from "../Order/Order"
import { displayCart } from "../Animation/Cart/displayCart.js"
import { AddToCartButton } from "src/Animation/ShowBookInfo/AddToCartButton"

class Orderlist{
    constructor(
    private _orders: Order[],
    private _totalOrderList: number
    ){}

    get orders() {
      return this._orders
    }

    get totalOrderList() {
      return this._totalOrderList
    }

    set totalOrderList(value: number) {
      this._totalOrderList = value
    }

    public addOrders(order: Order, addToCartButton: AddToCartButton) {
      this._orders.push(order)
      //Show Book order in the cart interface
      displayCart.showBooksOrder(order, addToCartButton)
      /* console.log(addToCartButton) */
    }

    public removeOrders(order: Order) {

      const index = this._orders.findIndex(item => item === order)

      if(index !== -1) {
        this._orders.splice(index, 1)
      } else {
        console.error('The element does not exist')
      }

    }

    public getTotalOrders() {
      let newValue = 0
      this.orders.forEach(e => {
        newValue += e.quantity * e.book.price
      })
      this.totalOrderList = newValue
    }

    public resetProducts(){

    }

    public sellProducts(){

    }
}

let orderList = new Orderlist([], 0)

export {
  orderList
}
