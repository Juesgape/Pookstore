class Book {
    _id;
    _title;
    _author;
    _description;
    _img;
    _genre;
    _price;
    _supplier;
    _stock;
    _cartButton;
    constructor(_id, _title, _author, _description, _img, _genre, _price, _supplier, _stock, 
    //saving the addToCartButton that belongs to the book
    _cartButton) {
        this._id = _id;
        this._title = _title;
        this._author = _author;
        this._description = _description;
        this._img = _img;
        this._genre = _genre;
        this._price = _price;
        this._supplier = _supplier;
        this._stock = _stock;
        this._cartButton = _cartButton;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    get description() {
        return this._description;
    }
    get img() {
        return this._img;
    }
    get genre() {
        return this._genre;
    }
    get price() {
        return this._price;
    }
    get stock() {
        return this._stock;
    }
    get cartButton() {
        return this._cartButton;
    }
    set cartButton(button) {
        this._cartButton = button;
    }
    set stock(quantity) {
        this._stock -= quantity;
    }
}
export { Book };
