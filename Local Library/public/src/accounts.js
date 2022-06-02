function findAccountById(accounts, id) {
  return accounts.find((account) => account.id ===id)
  
}
function sortAccountsByLastName(accounts) {
  return accounts.sort((accountOne, accountTwo) => 
               accountOne.name.last.toLowerCase() > accountTwo.name.last.toLowerCase() ? 1 : -1)
  
}
function getTotalNumberOfBorrows(account, books) {
  let borrow = 0
  for (let i = 0; i < books.length; i++){
    const book = books[i]
    for(let j = 0; j < book.borrows.length; j++){
      if(account.id === book.borrows[j].id){
        borrow += 1;
      }
    }
  }return borrow;
}

function getBooksPossessedByAccount(account, books, authors) {
 let result = []
 let match = []
 books.forEach((item) => {
  const borrow = item.borrows
  const book = {
   id: item.id,
   title: item.title,
   genre: item.genre,
   authorId: item.authorId,
   author: {},
   borrows: {}
  };
  const { id, title, genre, authorId, author, borrows } = book
  borrow.forEach((borrow) => {
   if (borrow.id === account.id && borrow.returned === false) {
    result.push(book)
    match.push(borrow)
    book.borrows = match
    book.author = authors.filter((auth) => auth.id === book.authorId)[0]
   } })})
 return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
