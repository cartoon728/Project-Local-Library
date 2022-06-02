function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let checkOut = books.filter((book) => book.borrows.filter((record) => record.returned === false).length > 0)
  return checkOut.length
}

function getMostCommonGenres(books) {
  let mostCommon = {}
  books.forEach((number) => {
    if(mostCommon[number.genre]){
       mostCommon[number.genre]++
  }else{
       mostCommon[number.genre] = 1
           }})
  return Object.entries(mostCommon).map(([name, count]) => {
    return{name, count}
  })
  .sort((genreA, genreB) => genreB.count - genreA.count).slice(0, 5)
}


function getMostPopularBooks(books) {
  return books
  .map((popularBook) => {
    return {name: popularBook.title, count: popularBook.borrows.length }
  })
  .sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1))
  .slice(0, 5)
}

function getMostPopularAuthors(books, authors) {
  let result = []
  authors.forEach((popularAuthor) => {
    let author = {
      name: `${popularAuthor.name.first} ${popularAuthor.name.last}`, 
      count: 0
    }
    books.forEach((popularBooks) => {
      if(popularBooks.authorId === popularAuthor.id){
        author.count += popularBooks.borrows.length
      }
    })
    result.push(author)
  })
  return result.sort((bookA, bookB) => bookB.count - bookA.count).slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
