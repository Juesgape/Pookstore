export class Order {
    buyer;
    book;
    quantity;
    totalOrder;
    constructor(buyer, book, quantity, totalOrder //seria multiplicar precio del libro por cantidad y asignar ese valor
    ) {
        this.buyer = buyer;
        this.book = book;
        this.quantity = quantity;
        this.totalOrder = totalOrder;
    }
}
