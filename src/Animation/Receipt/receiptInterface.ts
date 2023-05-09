import { Order } from "src/Order/Order.js";
import { orderList } from "../../Orderlist/Orderlist.js";

class Receipt {
  constructor(
    private _userName: string,
    private _date: Date,
    private _receiptId: string,
  ) {

  }

  public set userName(userName:string) {
    this._userName = userName
  }

  public set date(newDate: Date) {
    this._date = newDate
  }

  public set receiptId(newId: string) {
    this._receiptId = newId
  }

  public get userName() {
    return this._userName
  }

  public get date() {
    return this._date
  }

  public get receiptId() {
    return this._receiptId
  }

  public backButton() {
    const iframe = document.getElementById('iframe-sold-info') as HTMLIFrameElement
    const innerDoc = iframe.contentDocument || iframe.contentWindow?.document
    const backToBooks = innerDoc?.querySelector('.receipt-back-button button') as HTMLElement

    backToBooks.addEventListener('click', () => {
      let header = window.parent.document.querySelector('header') as HTMLElement
      let recieptInfo = document.querySelector('.sold-info-container') as HTMLElement

      recieptInfo.classList.add('hide')
      header.classList.remove('hide')

    })
  }

  public showProducts() {

    const iframe = document.getElementById('iframe-sold-info') as HTMLIFrameElement
    const innerDoc = iframe.contentDocument || iframe.contentWindow?.document
    const receiptProductsContainer = innerDoc?.querySelector('.receipt-products-container') as HTMLElement
    const totalPurchase = innerDoc?.querySelector('.total-purchase') as HTMLElement

    //clearing out the information before
    receiptProductsContainer.innerHTML = ''

    orderList.orders.forEach(e => {
      const element = document.createElement('div')
      element.innerHTML = `
      <div class="product">
        <div class="product-quantity">
          <p><span class="quantity">${e['quantity']}</span>x</p>
        </div>

        <div class="receipt-product-info">
          <p class="receipt-book-title">${e['book']['title']}</p>
          <span class="receipt-author">${e['book']['author']}</span>
        </div>

        <div class="receipt-product-total">
          <p>$<span class="total-product">${(e['quantity'] * e['book']['price']).toLocaleString()}</span></p>
        </div>
    </div>
    `
    const total = orderList.getTotalOrders()
    totalPurchase.innerHTML = total.toLocaleString()

    receiptProductsContainer.appendChild(element)
    this.backButton()
    })

  }
}

export {
  Receipt
}
