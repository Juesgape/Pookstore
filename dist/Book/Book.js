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
    _totalBookInPurchase = 0;
    constructor(_id, _title, _author, _description, _img, _genre, _price, _supplier, _stock) {
        this._id = _id;
        this._title = _title;
        this._author = _author;
        this._description = _description;
        this._img = _img;
        this._genre = _genre;
        this._price = _price;
        this._supplier = _supplier;
        this._stock = _stock;
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
    set totalBookInPurchase(newValue) {
        console.log(`were gonna add ${newValue} to ${this._totalBookInPurchase}`);
        this._totalBookInPurchase += newValue; //new value will always be 1 or -1
        console.log(`total ${this._totalBookInPurchase}`);
    }
    get totalBookInPurchase() {
        return this._totalBookInPurchase;
    }
}
export { Book };
