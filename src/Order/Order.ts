import { Book } from "src/Book/Book";
import { User } from "src/User/User";
import { orderList } from "src/Orderlist/Orderlist";
import { AddToCartButton } from "../Animation/ShowBookInfo/AddToCartButton.js";

class Order{
    private _buyer!: User;
    private _book!: Book;
    private _addToCartButton!: AddToCartButton
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

    get addToCartButton() {
      return this._addToCartButton
    }

    set addToCartButton(value: AddToCartButton) {
      this._addToCartButton = value
    }

    set buyer(user: User) {
      this._buyer = user
    }

    set book(book: Book) {
      this._book = book
    }

    set quantity(bookQuantities: number) {
      this._quantity +=  bookQuantities
    }

    set totalOrder(book: Book) {
      this._totalOrder = this.quantity * book.price
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

    public resetQuantity() {
      this._quantity = 0
      this.addToCartButton.removeBook(this.book)
    }
}

let order = new Order()

export {
  Order,
  order
}
