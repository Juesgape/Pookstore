import { Book } from "src/Book/Book"
import {Order} from "../Order/Order"
import { displayCart } from "../Animation/Cart/displayCart.js"

class Orderlist{
    constructor(
    private _orders: Order[],
    private _totalOrderList: number
    ){}

    get orders() {
      return this._orders
    }

    public addOrders(order: Order) {
      this._orders.push(order)
      //Show Book order in the cart interface
      displayCart.showBooksOrder(order)
      console.log(this.orders)
    }

    public removeOrders(order: Order) {

      const index = this._orders.findIndex(item => item === order)

      if(index !== -1) {
        this._orders.splice(index, 1)
      } else {
        console.error('The element does not exist')
      }

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
