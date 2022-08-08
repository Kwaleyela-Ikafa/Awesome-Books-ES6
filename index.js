/* eslint-disable no-unused-vars */
import { DateTime } from './modules/luxon.js';
import {
  BookData, button, titleInput, authorInput, Storage,
} from './modules/storage.js';
import { Book, UI, ui } from './modules/UI.js';
import { addBook, removeBook } from './modules/addBook.js';
import {
  addNew, form, list, listDiv, contact, contactDiv,
} from './modules/navigation.js';

const now = DateTime.now();
document.getElementById('displayDateTime').innerHTML = now;
