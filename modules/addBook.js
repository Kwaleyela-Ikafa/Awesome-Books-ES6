import {
  BookData, button, titleInput, authorInput, Storage,
} from './storage.js';
import { Book, ui } from './UI.js';

const addBook = (e) => {
  const title = titleInput.value;
  const author = authorInput.value;

  const newBook = new Book(title, author);

  Storage.addBook(newBook);

  ui.addBookToUI(newBook);
  ui.clearInputs(titleInput, authorInput);

  e.preventDefault();
};

const removeBook = (e) => {
  if (e.target.className === 'remove remove-btn btn') {
    ui.removeBookFromUI(e.target);
    Storage.removeFromBooks(e.target);
  }
};

button.addEventListener('click', addBook);
BookData.addEventListener('click', removeBook);
document.addEventListener('DOMContentLoaded', () => {
  const allBooks = Storage.getBooksFromStorage();
  allBooks.forEach((book) => ui.addBookToUI(book));
});

export { addBook, removeBook };