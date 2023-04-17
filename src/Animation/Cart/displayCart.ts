import { Book } from "src/Book/Book.js"
import { orderList } from "../../Orderlist/Orderlist.js"
import { Order } from "../../Order/Order.js"

class DisplayCart {
  cartContainer = document.querySelector('.cart-container') as HTMLElement
  cartPurchaseContainer = document.querySelector('.cart-purchases-container') as HTMLElement
  xButton = document.querySelector('.x-button') as HTMLElement

  constructor(
    private _deleteButtonsArr: HTMLElement[] = []
  ) {
  }

  public set deleteButtonsArr(arr: HTMLElement[]) {
    this._deleteButtonsArr = arr
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

  showBooksOrder(order: Order) {
    console.log('Order quantity', order.quantity);

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

    while(tempContainer.firstChild) {
      fragment.appendChild(tempContainer.firstChild)
    }

    productsInfoContainer.appendChild(fragment)
    this.deleteFunction(fragmentId, order)
  }


  public deleteFunction(fragmentId: string, order: Order) {

    // Add event listener to the delete button
    const deleteBtn = document.querySelector(`#${fragmentId} .delete-book-button`) as HTMLElement
    deleteBtn.addEventListener('click', () => {
      // Find the product-info container element using the unique identifier
      const productInfoContainer = document.querySelector(`#${fragmentId}`) as HTMLElement
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
      order.resetQuantity()
  })

  }
}

let displayCart = new DisplayCart()

displayCart.clickCart()

export {
  displayCart
}
