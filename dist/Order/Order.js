class Order {
    _buyer;
    _book;
    _addToCartButton;
    _quantity = 0;
    _totalOrder = 0; // Multiply the book price by the quantity
    constructor() { }
    get buyer() {
        return this._buyer;
    }
    get book() {
        return this._book;
    }
    get quantity() {
        return this._quantity;
    }
    get addToCartButton() {
        return this._addToCartButton;
    }
    set addToCartButton(value) {
        this._addToCartButton = value;
    }
    set buyer(user) {
        this._buyer = user;
    }
    set book(book) {
        this._book = book;
    }
    set quantity(bookQuantities) {
        this._quantity += bookQuantities;
    }
    set totalOrder(book) {
        this._totalOrder = this.quantity * book.price;
    }
    //Getter of the totalOrder
    getTotalOrder() {
        return this._totalOrder;
    }
    //que es createorder() ?
    makeOrder(buyer, book) {
        this.buyer = buyer;
        this.book = book;
        this.quantity += 1;
        this.totalOrder = book;
    }
    resetQuantity() {
        this._quantity = 0;
        this.addToCartButton.removeBook(this.book);
    }
}
let order = new Order();
export { Order, order };
