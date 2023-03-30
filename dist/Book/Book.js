"use strict";
class Book {
    id;
    title;
    author;
    genre;
    price;
    supplier;
    stock;
    constructor(id, title, author, genre, price, supplier, stock) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.price = price;
        this.supplier = supplier;
        this.stock = stock;
    }
}
