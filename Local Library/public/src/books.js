function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
 }
function findBookById(books, id) {
  return found = books.find((book) => book.id === id)
}
function partitionBooksByBorrowedStatus(books) {
let returned = books.filter((book) => book.borrows.every((borrow) => borrow.returned === true))
let borrowedbooks = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false))
let list = [[...borrowedbooks], [...returned]]
  return list
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
  .map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id);
    return {...borrow, ...account};
  })
  .slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
