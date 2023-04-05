import { Book } from "../Book/Book.js"


//get Back function
const getBackToBooks = (book: Book) => {
  const iframe = document.querySelector('#iframe-book-info') as HTMLIFrameElement
  const iframeContent = iframe.contentDocument || iframe.contentWindow?.document
  //Container inside the iframe
  const  bookInfoContainer = window.parent.document.querySelector('.book-info-container') as HTMLElement

  const btnBack = iframeContent?.querySelector('.buy-button')

  //showing the information of the needed book
  bookInfo(book)

  btnBack?.addEventListener('click', () => {
    bookInfoContainer.classList.add('hide')

    let mainContainer = window.parent.document.querySelector('.main-container') as HTMLElement
    let header = window.parent.document.querySelector('header') as HTMLElement
    header.classList.remove('blur')
    mainContainer.classList.remove('blur')
  })


}

const bookInfo = (book: Book) => {
  const iframe = document.querySelector('#iframe-book-info') as HTMLIFrameElement;
  const iframeContent = iframe.contentDocument || iframe.contentWindow?.document;
  const bookTitle = iframeContent?.querySelector('.book-title') as HTMLElement;
  const bookAuthor = iframeContent?.querySelector('.book-author') as HTMLElement;
  const bookDescription = iframeContent?.querySelector('.book-description') as HTMLElement;
  const bookImg = iframeContent?.querySelector('#book-info-img') as HTMLImageElement;

  bookTitle.innerHTML = book.title
  bookAuthor.innerHTML = book.author
  bookDescription.innerHTML = book.description
  bookImg.src = book.img
}


export {
  getBackToBooks,
  bookInfo
}
