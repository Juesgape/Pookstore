import { AddToCartButton } from "src/Animation/ShowBookInfo/AddToCartButton"

class Book{
   //saving the addToCartButton that belongs to the book
    private _cartButton!: AddToCartButton
    constructor(
    private _id: string,
    private _title: string,
    private _author: string,
    private _description: string,
    private _img: string,
    private _genre: string,
    private _price: number,
    private _supplier: string,
    private _stock: number,
    ){}

    get id() {
      return this._id
    }

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

    get cartButton() {
      return this._cartButton
    }

    set cartButton(button: AddToCartButton) {
      this._cartButton = button
    }

    set stock(quantity: number) {
      this._stock -= quantity
    }
}

export {
  Book
}

