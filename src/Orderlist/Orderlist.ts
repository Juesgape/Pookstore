import { Book } from "src/Book/Book"
import {Order} from "../Order/Order"
import { displayCart } from "../Animation/Cart/displayCart.js"
import { AddToCartButton } from "src/Animation/ShowBookInfo/AddToCartButton"
import { Receipt } from "../Animation/Receipt/receiptInterface.js"
import {user} from '../selectFav.js'

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

    set orders(emptyArr:[]) {
      this._orders = emptyArr
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
        newValue += e['quantity'] * e['book']['price']
      })
      this.totalOrderList = newValue
      return this.totalOrderList
    }

    public resetProducts(){
      /* this.orders.forEach(order => {
        const resettingNumber = -order.quantity
        order.quantity = resettingNumber
      }) */

      this.orders.forEach(e => {
        //updating orderQuantity
       /*  e.quantity = -(e.quantity) */
        //updating book stock and button
        e['book']['stock'] = e['quantity']
        e['book']['cartButton']['resetButton']()
      })
      this.orders = []
    }

    public sellProducts() {
      //When this quantity is 0, the interface will hide the buy button, however, we do this for security lol

      let header = window.parent.document.querySelector('header') as HTMLElement
      let recieptInfo = document.querySelector('.sold-info-container') as HTMLElement

      recieptInfo.classList.remove('hide')
      header.classList.add('hide')

      //Creating new Receipt
      let newReciept = new Receipt(user.userName, new Date(), Math.random().toString())
      newReciept.showProducts()

      this.resetProducts()
    }
}

let orderList = new Orderlist([], 0)

export {
  orderList
}
