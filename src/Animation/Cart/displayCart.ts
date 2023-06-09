import { Book } from "src/Book/Book.js"
import { orderList } from "../../Orderlist/Orderlist.js"
import { Order, order } from "../../Order/Order.js"
import { CartFragment } from "./cartFragment.js"
import { AddToCartButton } from "../ShowBookInfo/AddToCartButton.js"

class DisplayCart {
  cartContainer = document.querySelector('.cart-container') as HTMLElement
  cartPurchaseContainer = document.querySelector('.cart-purchases-container') as HTMLElement
  xButton = document.querySelector('.x-button') as HTMLElement
  subTotal = document.querySelector('.sub-total') as HTMLElement
  total = document.querySelector('.total') as HTMLElement
  buyButton = document.querySelector('.buy-button-container button') as HTMLElement

  constructor(

  ) {
  }

  clickCart() {
    this.cartContainer.addEventListener('click', () => {
      this.cartPurchaseContainer.classList.remove('hide')
      this.clickXbtn()
      this.showCartContent()
    })
  }

  clickXbtn() {
    this.xButton.addEventListener('click', () => {
      this.cartPurchaseContainer.classList.add('hide')
    })
  }

  click_X_btn_automatically() {
    this.cartPurchaseContainer.classList.add('hide')
  }

  clickBuyButton() {
    this.buyButton.addEventListener('click', () => {
      orderList.sellProducts()
      this.click_X_btn_automatically()
    })
  }

  public setSubTotal() {
    //update the total value of the orderList class
    orderList.getTotalOrders()
    this.subTotal.innerHTML = orderList.totalOrderList.toLocaleString()
  }

  public setTotal() {
    //update the total value of the orderList class
    orderList.getTotalOrders()
    this.total.innerHTML = orderList.totalOrderList.toLocaleString()

  }

  showCartContent() {
    const cartZeroContainer = document.querySelector('.cart-zero-container') as HTMLElement
    const productsInfo = document.querySelector('.products-info') as HTMLElement


    if(orderList.orders.length > 0) {
      cartZeroContainer.classList.add('hide')
      cartZeroContainer.style.display = 'none'

      productsInfo.classList.remove('hide')

    } else {
      cartZeroContainer.classList.remove('hide')
      cartZeroContainer.style.display = 'flex'
      productsInfo.classList.add('hide')
    }
  }

  showBooksOrder(order: Order, addToCartButton: AddToCartButton) {

    const productsInfoContainer = document.querySelector('.products-info') as HTMLElement

    // Create a unique identifier for the fragment
    const fragmentId = `book-${order.book.id}`

    // Create a DocumentFragment
    const fragment = document.createDocumentFragment()
    // Create a temporary container element
    const tempContainer = document.createElement('div')

    tempContainer.innerHTML = `
    <div class="product-info" id="${fragmentId}">
      <div class="delete-book-button"></div>

        <div class="product-img-container">
          <figure>
            <img src="${order.book.img}" alt="">
          </figure>
        </div>

        <div class="book-all-info-container">
          <span class="book-author">${order.book.author}</span>
          <p class="book-title">${order.book.title}</p>

          <div class="book-quantity">

        <div class="add-book-container">
          <div>
            <p  class="subs-book-button">-</p>
          </div>
          <div><span class="total-book-in-purchase">${order.quantity}</span></div>
          <div>
            <p class="add-book-button">+</p>
          </div>
        </div>

        <div class="book-total">
          <p>$<span>${(order.book.price * order.quantity).toLocaleString()}</span></p>
        </div>
      </div>

        </div>


  </div>
    `

    let quantityText, plusIcon, subsIcon, bookTotal

    while(tempContainer.firstChild) {
      fragment.appendChild(tempContainer.firstChild)

      quantityText = fragment.querySelector('.total-book-in-purchase')
      plusIcon = fragment.querySelector('.add-book-button')
      subsIcon = fragment.querySelector('.subs-book-button')
      bookTotal = fragment.querySelector('.book-total span')
    }


    productsInfoContainer.appendChild(fragment)

    const newCartFragment = new CartFragment(fragmentId, quantityText, plusIcon, subsIcon, order, addToCartButton, bookTotal)
    newCartFragment.deleteFunction()
    newCartFragment.plusIconFunction()
    newCartFragment.subsIconFunction()

    //connect the addToCartButton with the CartFragment class
    addToCartButton.cartFragment = newCartFragment
  }


}

let displayCart = new DisplayCart()

displayCart.clickCart()
displayCart.clickBuyButton()

export {
  displayCart
}
