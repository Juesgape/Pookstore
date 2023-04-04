class Book{
    constructor(
    private _id: string,
    private _title: string,
    private _author:string,
    private _description: string,
    private _img: string,
    private _genre:string,
    private _price:string,
    private _supplier:string,
    private _stock:number
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
}

export {
  Book
}

