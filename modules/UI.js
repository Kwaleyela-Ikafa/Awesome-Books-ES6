import { BookData, button, titleInput, authorInput, Storage} from './storage.js';

function Book(title, author) {
    this.title = title;
    this.author = author;
  }
  
  class UI {
  constructor() { }
  addBookToUI(newBook) {
    BookData.innerHTML += `
      <li class='book book-item'>
      <div class ='info'>
        <p class='book-title'>${newBook.title}</p>
        <p class='book-author'>&nbsp by ${newBook.author}</p>
      </div>
        <button class='remove remove-btn btn' type='button'>Remove</button>
      </li>
    `;
  }
  clearInputs(element1, element2) {
    element1.value = '';
    element2.value = '';
  }
  removeBookFromUI(target) {
    target.parentElement.remove();
  }
} 

const ui = new UI();

export { Book, UI, ui };