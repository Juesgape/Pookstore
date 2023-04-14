import { Book } from "src/Book/Book.js"
import { orderList } from "../../Orderlist/Orderlist.js"

class DisplayCart {
  cartContainer = document.querySelector('.cart-container') as HTMLElement
  cartPurchaseContainer = document.querySelector('.cart-purchases-container') as HTMLElement
  xButton = document.querySelector('.x-button') as HTMLElement

  constructor() {

  }

  clickCart() {
    this.cartContainer?.addEventListener('click', () => {
      this.cartPurchaseContainer.classList.remove('hide')
      this.clickXbtn()
      this.showCartContent()
    })
  }

  clickXbtn() {
    this.xButton?.addEventListener('click', () => {
      this.cartPurchaseContainer.classList.add('hide')
    })
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

  showBooksOrder(book: Book) {
    console.log('Function invoked', book.totalBookInPurchase);

    const productsInfoContainer = document.querySelector('.products-info') as HTMLElement
    // Create a DocumentFragment
    const fragment = document.createDocumentFragment()
    // Create a temporary container element
    const tempContainer = document.createElement('div')

    tempContainer.innerHTML = `
    <div class="product-info">
      <div class="delete-book-button"></div>

        <div class="product-img-container">
          <figure>
            <img src="${book.img}" alt="">
          </figure>
        </div>

        <div class="book-all-info-container">
          <span class="book-author">${book.author}</span>
          <p class="book-title">${book.title}</p>
        </div>

      </div>

      <div class="book-quantity">

        <div class="add-book-container">
          <div>
            <p  class="subs-book-button">-</p>
          </div>
          <div><span class="total-book-in-purchase">${book.totalBookInPurchase}</span></div>
          <div>
            <p class="add-book-button">+</p>
          </div>
        </div>

        <div class="book-total">
          <p>$<span>${(book.price * book.totalBookInPurchase).toLocaleString()}</span></p>
        </div>
    </div>
    `

    while(tempContainer.firstChild) {
      fragment.appendChild(tempContainer.firstChild)
    }

    productsInfoContainer.appendChild(fragment)
  }

}

let displayCart = new DisplayCart()

displayCart.clickCart()

export {
  displayCart
}
