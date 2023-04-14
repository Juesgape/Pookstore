import { Book } from "src/Book/Book";
import { User } from "src/User/User";
import { orderList } from "src/Orderlist/Orderlist";

class Order{
    private _buyer!: User;
    private _book!: Book;
    private _quantity: number = 0;
    private _totalOrder: number = 0; // Multiply the book price by the quantity

    constructor(
    ){}

    get buyer() {
      return this._buyer
    }

    get book() {
      return this._book
    }

    get quantity() {
      return this._quantity
    }


    set buyer(user: User) {
      this._buyer = user
    }

    set book(book: Book) {
      this._book = book
    }

    set quantity(bookQuantities: number) {
      this._quantity =  bookQuantities
    }

    set totalOrder(book: Book) {
      this._totalOrder = book.totalBookInPurchase * book.price
    }

    //Getter of the totalOrder
    public getTotalOrder(): number {
      return this._totalOrder
    }

    //que es createorder() ?
    public makeOrder(buyer: User, book: Book) {
      this.buyer = buyer
      this.book = book
      this.quantity += 1
      this.totalOrder = book
    }
}

let order = new Order()

export {
  Order,
  order
}
