class Library {
        #books  = [];

        constructor(booksf){
            if (Number(booksf.length) != Number(new Set(booksf).size)) {
                throw new Error ("массив содержит дубликаты");
            }
            this.#books = booksf;
        }

        book(title) {
            return this.#books.find(item => item === title);
        }

        allBooks() {
            return this.#books.toString();
        }

        addBook(title) {
            const book = this.book(title);
            if (book) {
                throw new Error(`Книга с названием "${title}" уже существует!`);
            }
            this.#books.push(title);
        }

        removeBook(title) {
            const book = this.book(title);
            if (!book) {
                throw new Error(`Книга с названием "${title}" не существует!`);
            }
            const index = this.#books.indexOf(book);
            this.#books.splice(index, 1);
        }

        hasBook(title) {
            return this.book(title) != null;
        }

}

//const library = new Library(['Book1', 'Book2', 'Book2']); // Error: массив содержит дубликаты
const library = new Library(['Book1', 'Book2', 'Book3']);
console.log(library.allBooks()); // Book1,Book2,Book3
console.log(library.book('Book2'));
// library.addBook('Book2'); // Error: Книга с названием "Book2" уже существует!
library.addBook('Book4');
console.log(library.allBooks()); // Book1,Book2,Book3,Book4
console.log(library.hasBook('Book4')); // true
library.removeBook('Book4');
console.log(library.hasBook('Book4')); // false
console.log(library.allBooks());  // Book1,Book2,Book3