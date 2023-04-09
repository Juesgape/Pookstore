import { Book } from "src/Book/Book";
import { User } from "src/User/User";

export class Order{
    private _buyer = {}
    private _book = {}
    private _quantity = 0
    private _totalOrder = 0 // Multiply the book price by the quantity

    constructor(
    ){}

    /* get buyer() {
      return this._buyer
    }

    get book() {
      return this._book
    } */

    get quantity() {
      return this._quantity
    }

    get totalOrder() {
      return this._totalOrder
    }

    set buyer(user: User) {
      this._buyer = user
    }

    set book(book: Book) {
      this._book = book
    }

    set quantity(bookPrice: number) {
      this._quantity =  bookPrice
    }

    set totalOrder(book: Book) {
      let bookPriceInFloat = parseFloat(book.price.replace(/[^0-9.-]+/g,"").replace(",", "."))
      this._totalOrder = book.totalBookInPurchase * bookPriceInFloat
    }
    //que es createorder() ?
    public makeOrder(buyer: User, book: Book) {
      this.buyer = buyer
      this.book = book
      this.quantity = book.totalBookInPurchase
      this.totalOrder = book
    }
}

let order = new Order()

export {
  order
}
