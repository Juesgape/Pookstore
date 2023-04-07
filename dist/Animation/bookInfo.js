let cartNumber = window.parent.document.querySelector('#number-cart');
let currentCartNumber = 0;
//get Back function
const getBackToBooks = (book) => {
    const iframe = document.querySelector('#iframe-book-info');
    const iframeContent = iframe.contentDocument || iframe.contentWindow?.document;
    //Container inside the iframe
    const bookInfoContainer = window.parent.document.querySelector('.book-info-container');
    const btnBack = iframeContent?.querySelector('.buy-button');
    //showing the information of the needed book
    bookInfo(book);
    btnBack?.addEventListener('click', () => {
        bookInfoContainer.classList.add('hide');
        let mainContainer = window.parent.document.querySelector('.main-container');
        let header = window.parent.document.querySelector('header');
        header.classList.remove('blur');
        mainContainer.classList.remove('blur');
    });
};
const bookInfo = (book) => {
    const iframe = document.querySelector('#iframe-book-info');
    const iframeContent = iframe.contentDocument || iframe.contentWindow?.document;
    const bookTitle = iframeContent?.querySelector('.book-title');
    const bookAuthor = iframeContent?.querySelector('.book-author');
    const bookDescription = iframeContent?.querySelector('.book-description');
    const bookImg = iframeContent?.querySelector('#book-info-img');
    bookTitle.innerHTML = book.title;
    bookAuthor.innerHTML = book.author;
    bookDescription.innerHTML = book.description;
    bookImg.src = book.img;
};
//this section is for when we want to buy books
const sumCartNumber = () => {
    currentCartNumber += 1;
    cartNumber.innerHTML = currentCartNumber.toString();
};
const subsCartNumber = () => {
    currentCartNumber -= 1;
    cartNumber.innerHTML = currentCartNumber.toString();
};
export {};
