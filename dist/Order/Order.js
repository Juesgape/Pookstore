export class Order {
    _buyer = {};
    _book = {};
    _quantity = 0;
    _totalOrder = 0; // Multiply the book price by the quantity
    constructor() { }
    /* get buyer() {
      return this._buyer
    }

    get book() {
      return this._book
    } */
    get quantity() {
        return this._quantity;
    }
    get totalOrder() {
        return this._totalOrder;
    }
    set buyer(user) {
        this._buyer = user;
    }
    set book(book) {
        this._book = book;
    }
    set quantity(bookPrice) {
        this._quantity = bookPrice;
    }
    set totalOrder(book) {
        let bookPriceInFloat = parseFloat(book.price.replace(/[^0-9.-]+/g, "").replace(",", "."));
        this._totalOrder = book.totalBookInPurchase * bookPriceInFloat;
    }
    //que es createorder() ?
    makeOrder(buyer, book) {
        this.buyer = buyer;
        this.book = book;
        this.quantity = book.totalBookInPurchase;
        this.totalOrder = book;
    }
}
let order = new Order();
export { order };
