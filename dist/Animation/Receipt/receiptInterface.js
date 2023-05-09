import { orderList } from "../../Orderlist/Orderlist.js";
class Receipt {
    _userName;
    _date;
    _receiptId;
    constructor(_userName, _date, _receiptId) {
        this._userName = _userName;
        this._date = _date;
        this._receiptId = _receiptId;
    }
    set userName(userName) {
        this._userName = userName;
    }
    set date(newDate) {
        this._date = newDate;
    }
    set receiptId(newId) {
        this._receiptId = newId;
    }
    get userName() {
        return this._userName;
    }
    get date() {
        return this._date;
    }
    get receiptId() {
        return this._receiptId;
    }
    backButton() {
        const iframe = document.getElementById('iframe-sold-info');
        const innerDoc = iframe.contentDocument || iframe.contentWindow?.document;
        const backToBooks = innerDoc?.querySelector('.receipt-back-button button');
        backToBooks.addEventListener('click', () => {
            let header = window.parent.document.querySelector('header');
            let recieptInfo = document.querySelector('.sold-info-container');
            recieptInfo.classList.add('hide');
            header.classList.remove('hide');
        });
    }
    showProducts() {
        const iframe = document.getElementById('iframe-sold-info');
        const innerDoc = iframe.contentDocument || iframe.contentWindow?.document;
        const receiptProductsContainer = innerDoc?.querySelector('.receipt-products-container');
        const totalPurchase = innerDoc?.querySelector('.total-purchase');
        //clearing out the information before
        receiptProductsContainer.innerHTML = '';
        orderList.orders.forEach(e => {
            const element = document.createElement('div');
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
    `;
            const total = orderList.getTotalOrders();
            totalPurchase.innerHTML = total.toLocaleString();
            receiptProductsContainer.appendChild(element);
            this.backButton();
        });
    }
}
export { Receipt };
