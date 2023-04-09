class Book{
  private _totalBookInPurchase = 0
    constructor(
    private _id: string,
    private _title: string,
    private _author: string,
    private _description: string,
    private _img: string,
    private _genre: string,
    private _price: string,
    private _supplier: string,
    private _stock: number
    ){}

    get title() {
      return this._title
    }

    get author() {
      return this._author
    }

    get description() {
      return this._description
    }

    get img() {
      return this._img
    }

    get genre() {
      return this._genre
    }

    get price() {
      return this._price
    }

    get stock() {
      return this._stock
    }

    set totalBookInPurchase(newValue: number) {
      console.log(`were gonna add ${newValue} to ${this._totalBookInPurchase}`)
      this._totalBookInPurchase += newValue //new value will always be 1 or -1

      console.log(`total ${this._totalBookInPurchase}`)
    }

    get totalBookInPurchase(): number {
      return this._totalBookInPurchase
    }
}

export {
  Book
}

