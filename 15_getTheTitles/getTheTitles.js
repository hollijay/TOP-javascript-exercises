const getTheTitles = function(books) {
    let titles = books.reduce((accumulator,currentValue) =>{
        accumulator.push(currentValue.title)
        return accumulator
    }, [])
    return titles
};

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]
titles=getTheTitles(books)
console.log(titles)
// Do not edit below this line
module.exports = getTheTitles;
