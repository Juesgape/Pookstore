/* import * as puppeteer from "puppeteer" */

class GetBooks {
  constructor(
    private _urls: string[] = [
      "https://www.goodreads.com/choiceawards/best-mystery-thriller-books-2022",
      "https://www.goodreads.com/choiceawards/best-historical-fiction-books-2022",
      "https://www.goodreads.com/choiceawards/best-fantasy-books-2022",
      "https://www.goodreads.com/choiceawards/best-romance-books-2022",
      "https://www.goodreads.com/choiceawards/best-science-fiction-books-2022",
      "https://www.goodreads.com/choiceawards/best-horror-books-2022",
      "https://www.goodreads.com/choiceawards/best-humor-books-2022",
      "https://www.goodreads.com/choiceawards/best-nonfiction-books-2022",
      "https://www.goodreads.com/choiceawards/best-memoir-autobiography-books-2022",
      "https://www.goodreads.com/choiceawards/best-history-biography-books-2022",
      "https://www.goodreads.com/choiceawards/best-graphic-novels-comics-2022",
      "https://www.goodreads.com/choiceawards/best-poetry-books-2022",
      "https://www.goodreads.com/choiceawards/best-debut-novel-2022",
      "https://www.goodreads.com/choiceawards/best-young-adult-fiction-books-2022",
      "https://www.goodreads.com/choiceawards/best-young-adult-fantasy-books-2022",
      "https://www.goodreads.com/choiceawards/best-childrens-books-2022"
    ],
    private _userFavGenresLinks: string[] = []

  ) {}

      public getFavoriteLinks(userLikes: string[]): void {

        let toLowerGenres: string[] = userLikes.map(e => {
          e = e.toLowerCase()
          e = e.replace(" ", "-")
          return e
        })

        for(let i = 0; i < toLowerGenres.length; i++) {
          //create new array with the urls that match the user's likes
          let newVersion = this._urls.filter(element => element.includes(toLowerGenres[i]))

          newVersion.forEach(e => {
            /* console.log('Element', e); */
            this._userFavGenresLinks.push(e)
            })

        }
        console.log('User likes', this._userFavGenresLinks);
    }

    /* public async getData() {

      console.log('Starting the extraction');
      //getting started with puppeteer
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      //where we will store our data
      let data = [];

      //loop through all of our user's genres likes
      for (let i = 0; i < this._userFavGenresLinks.length; i++) {
          await page.goto(this._userFavGenresLinks[i]);

          //get all the books elements availables in the page and get their links
          const bookLinks = await page.$$eval('.js-tooltipTrigger .pollAnswer__bookLink', links =>
              links.map(link => (link as HTMLAnchorElement).href)
          );

          console.log(`Found ${bookLinks.length} books on page`);

          console.log(`This are the bookLinks selected ${bookLinks}`);


          //Loop through all the books links and get their information
          for (let j = 0; j < bookLinks.length; j++) {
            //saving the pages that we're going to in a variable
            let bookPage;
            const bookLink = bookLinks[j];

            if (bookLink) {
                bookPage = await browser.newPage();
                await bookPage.goto(bookLink);
            } else {
                continue;
            }
            //awating data cuz we dont want to get an error, this is optional and we could do it differently
            await page.waitForTimeout(2000);
            //getting the bookData
            let bookData = await bookPage.evaluate(() => {
                let titleElement = document.querySelector('.Text__title1')
                let authorElement = document.querySelector('.ContributorLink__name');
                let descriptionElement = document.querySelector('.Formatted')
                let imgElement = document.querySelector('.BookCover .ResponsiveImage')
                let ratingElement = document.querySelector('.RatingStatistics__rating')
                let bookGenre = document.querySelectorAll('.BookPageMetadataSection__genres .BookPageMetadataSection__genreButton  .Button .Button__labelItem')
                //returning an object
                return {
                    title: titleElement ? titleElement.textContent?.trim() : '',
                    author: authorElement ? authorElement.textContent?.trim() : '',
                    description: descriptionElement ? descriptionElement.textContent?.trim() : '',
                    img: imgElement ? imgElement.getAttribute('src') : '',
                    rating: ratingElement ? ratingElement.textContent + '/5' : '',
                    genre: bookGenre ? bookGenre[0].textContent : ''
                }
            });
            console.log(`An author name was found = "${bookData.author}"`);
            data.push(bookData);
            await bookPage.close();
            await page.waitForTimeout(1000);
      }
      await page.close()
  }
      console.log(data);
      await browser.close();

      return data //scraped data
    } */

    public showBooks(books: any[]) {
      const bookContainer = document.querySelector('.book-container') as HTMLElement;

      // Clear previous book data
      bookContainer.innerHTML = '';

      // Loop through each book and create a card for it
      books.forEach((book) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const bookTitle = document.createElement('h3');
        bookTitle.classList.add('book-title');
        bookTitle.textContent = book.title;
        bookCard.appendChild(bookTitle);

        const bookImg = document.createElement('img');
        bookImg.src = book.img;
        bookImg.alt = book.title + ' cover';
        bookCard.appendChild(bookImg);

        const bookAuthor = document.createElement('p');
        bookAuthor.classList.add('book-author');
        bookAuthor.textContent = 'By: ' + book.author;
        bookCard.appendChild(bookAuthor);

        const bookPrice = document.createElement('p');
        bookPrice.classList.add('book-price');
        bookPrice.textContent = '$' + Math.floor(Math.random() * 500000).toLocaleString();
        bookCard.appendChild(bookPrice);

        const bookButtons = document.createElement('div');
        bookButtons.classList.add('book-buttons');

        const buyButton = document.createElement('button');
        buyButton.classList.add('buy-button');
        buyButton.textContent = 'Buy';
        bookButtons.appendChild(buyButton);

        const cartButton = document.createElement('button');
        cartButton.classList.add('cart-button');
        cartButton.textContent = 'Add to Cart';
        bookButtons.appendChild(cartButton);

        bookCard.appendChild(bookButtons);

        bookContainer.appendChild(bookCard);
      });
    }

    public getBooksAPI(){
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '2cdf4011bdmsh573d001fd6a6495p1785d3jsn658b5e2b4e46',
          'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        }
      };

      fetch('https://hapi-books.p.rapidapi.com/nominees/fantasy/2020', options)
        .then(response => response.json())
        .then(response => {
          const books = response.map((e:any) => {
            return {
              id: e.book_id,
              title: e.name,
              author: e.author,
              img: e.cover
            }
          })

          this.showBooks(books)

        })
        .catch(err => console.error(err));
    }
}

export {
  GetBooks
}
