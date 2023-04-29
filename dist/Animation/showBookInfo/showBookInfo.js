import { AddToCartButton } from "./AddToCartButton.js";
class ShowBookInfo {
    constructor() {
    }
    moreInfoEvent(book) {
        //Showing the bookInfo container AKA iframe
        let bookInfoContainer = document.querySelector('.book-info-container');
        bookInfoContainer?.classList.remove('hide');
        //Making the background blur
        let mainContainer = document.querySelector('.main-container');
        let header = window.parent.document.querySelector('header');
        header.classList.add('blur');
        mainContainer.classList.add('blur');
        //displaying the bookInformation
        this.displayBookInfo(book);
    }
    displayBookInfo(book) {
        const iframe = document.querySelector('#iframe-book-info');
        const iframeContent = iframe.contentDocument || iframe.contentWindow?.document;
        const bookTitle = iframeContent?.querySelector('.book-title');
        const bookAuthor = iframeContent?.querySelector('.book-author');
        const bookDescription = iframeContent?.querySelector('.book-description');
        const bookImg = iframeContent?.querySelector('#book-info-img');
        const btnBack = iframeContent?.querySelector('.buy-button');
        bookTitle.innerHTML = book.title;
        bookAuthor.innerHTML = book.author;
        bookDescription.innerHTML = book.description;
        bookImg.src = book.img;
        this.backButton(btnBack);
    }
    backButton(backButton) {
        const bookInfoContainer = window.parent.document.querySelector('.book-info-container');
        backButton.addEventListener('click', () => {
            bookInfoContainer.classList.add('hide');
            let mainContainer = window.parent.document.querySelector('.main-container');
            let header = window.parent.document.querySelector('header');
            header.classList.remove('blur');
            mainContainer.classList.remove('blur');
        });
    }
    createBookCategory(category) {
        const bookSection = document.querySelector('.book-section');
        let divCategory = document.createElement('div');
        divCategory.innerHTML = `
    <div class="category">
      <div class="category-name">
        <h3 class="category-title">${category}</h3>
      </div>
      <div class="book-container-${category} book-container"> </div>
    </div>
    `;
        bookSection.appendChild(divCategory);
    }
    showBooksByCategory(books, genre) {
        const bookContainer = document.querySelector(`.book-container-${genre}`);
        // Loop through each book and create a card for it
        books.forEach((book) => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');
            bookCard.innerHTML = `
          <h3 class="book-title">${book.title}</h3>
          <img src="${book.img}" alt="${book.title} cover">
          <p class="book-author">By: ${book.author}</p>
          <p class="book-price">$${book.price.toLocaleString()}</p>
          <div class="book-buttons">
            <button class="buy-button">View more info</button>
            <button class="cart-button">
              <div class="button-content">
                <span class=" hide delete-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v32c0 26.51 21.49 48 48 48h16.971l34.417 323.276C103.696 493.386 126.864 512 153.56 512h140.88c26.696 0 49.864-18.614 54.172-44.724L382.029 160H399.999c26.51 0 48-21.49 48-48v-32c0-26.51-21.49-48-48-48zm-40.276 64l-23.53 224H111.806l-23.529-224H359.724z"/></svg></span>
                <span id="add-to-cart">Add to Cart</span>
                <span class="hide plus-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 240H272V96c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v144H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h112v144c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V336h144c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32z"/></svg></span>
              </div>
          </button>
        </div>
        `;
            bookContainer.appendChild(bookCard);
            const moreInfoButton = bookCard.querySelector('.buy-button');
            //addToCartButton even though is a span element lol
            const addToCart = bookCard.querySelector("#add-to-cart");
            const deleteIcon = bookCard.querySelector('.delete-icon');
            const plusIcon = bookCard.querySelector('.plus-icon');
            moreInfoButton.addEventListener('click', () => {
                this.moreInfoEvent(book);
            });
            let addToCartButton = new AddToCartButton(deleteIcon, plusIcon, book, addToCart);
            book.cartButton = addToCartButton;
            plusIcon.addEventListener('click', () => {
                addToCartButton.addMoreBooks(book);
            });
            deleteIcon.addEventListener('click', () => {
                addToCartButton.removeBook(book);
            });
            addToCart.addEventListener('click', () => {
                addToCartButton.showIcons(book, addToCartButton);
            });
        });
    }
}
const showBookInfo = new ShowBookInfo();
export { showBookInfo };
