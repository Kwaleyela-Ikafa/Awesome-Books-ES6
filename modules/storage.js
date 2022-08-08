const BookData = document.querySelector('#books');
const button = document.querySelector('#add-button');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');

class Storage {
  constructor() {
    this.Books = [];
  }

  static addBook(newBook) {
    this.Books.push(newBook);
    localStorage.setItem('Books', JSON.stringify(this.Books));
  }

  static removeFromBooks(target) {
    const removeBook = target.previousElementSibling.firstElementChild.textContent;

    this.Books.filter((book, index) => {
      if (book.title === removeBook) {
        this.Books.splice(index, 1);
      }
      return this.Books;
    });
    localStorage.setItem('Books', JSON.stringify(this.Books));
  }

  static getBooksFromStorage() {
    if (localStorage.getItem('Books') === null) {
      this.Books = [];
    } else {
      this.Books = JSON.parse(localStorage.getItem('Books'));
    }
    return this.Books;
  }
}

export { BookData, button, titleInput, authorInput, Storage  };
