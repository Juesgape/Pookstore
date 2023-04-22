import { Order } from "../../Order/Order.js"
import { AddToCartButton } from "../ShowBookInfo/AddToCartButton.js"
import { orderList } from "../../Orderlist/Orderlist.js"
import { displayCart } from "./displayCart.js"

class CartFragment {
  constructor(
    private _fragmentId: string,
    private _quantityTextElm: HTMLElement,
    private _plusIcon: HTMLElement,
    private _subsIcon: HTMLElement,
    private _order: Order,
    private _addToCartButton: AddToCartButton,
    private _bookTotal: HTMLElement
  ) {

  }

  get order() {
    return this._order
  }
  get fragmentId() {
    return this._fragmentId
  }

  get addToCartButton() {
    return this._addToCartButton
  }

  set bookTotal(newTotal: string) {
    this._bookTotal.innerHTML = newTotal
  }

  set quantityTextElm(newValue: string) {
    this._quantityTextElm.innerHTML = newValue
  }

  public plusIconFunction() {
    this._plusIcon.addEventListener('click', () => {

      //controlling the quantity they can shipt/ship however the hell you write that
      if(this.order.quantity < this.order.book.stock) {
        //updating addToCartButton
        this.addToCartButton.addMoreBooks(this.order.book)
        this._quantityTextElm.innerHTML = this.order.quantity.toString()
      }
    })
  }

  public subsIconFunction() {
    this._subsIcon.addEventListener('click', () => {
      //We don't want negative values, do we?
      if(this.order.quantity >= 1) {
        //updating addToCartButton
        this.addToCartButton.removeBook(this.order.book)
        this._quantityTextElm.innerHTML = this.order.quantity.toString()
      }

    })
  }

  public updateQuantity() {
    this.quantityTextElm = this.order.quantity.toString()
    this.bookTotal = (this.order.quantity * this.order.book.price).toLocaleString()
    //showing total and subtotal
    displayCart.setSubTotal()
    displayCart.setTotal()
  }

  public deleteFunction() {
    // Add event listener to the delete button
    const deleteBtn = document.querySelector(`#${this.fragmentId} .delete-book-button`) as HTMLElement

    deleteBtn.addEventListener('click', () => {
      // Find the product-info container element using the unique identifier
      const productInfoContainer = document.querySelector(`#${this.fragmentId}`) as HTMLElement
      if (productInfoContainer) {
        // Find the book-quantity element inside the product-info container and remove it
        const bookQuantityContainer = productInfoContainer.querySelector('.book-quantity') as HTMLElement
        if (bookQuantityContainer) {
          bookQuantityContainer.remove()
        }
      // Remove the product-info container element from the DOM
      productInfoContainer.remove()
      }
      //setting order.quantity to 0 since we deleted the order
      this.order.resetQuantity()
      //updating the subtotal and total value
      displayCart.setSubTotal()
      displayCart.setTotal()

      //checking if there are orders left
      displayCart.showCartContent()
  })

  }

  public deleteFragment() {
    // Find the product-info container element using the unique identifier
    const productInfoContainer = document.querySelector(`#${this.fragmentId}`) as HTMLElement
    if (productInfoContainer) {
      // Find the book-quantity element inside the product-info container and remove it
      const bookQuantityContainer = productInfoContainer.querySelector('.book-quantity') as HTMLElement
      if (bookQuantityContainer) {
        bookQuantityContainer.remove()
      }
    // Remove the product-info container element from the DOM
    productInfoContainer.remove()
    }
  }

}

export {
  CartFragment
}
