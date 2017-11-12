/**
  * @description Add an array with an element "Uncategorized" to books without categories
  * @param {Array} books
  */
export function addCategoryToUncategorized(books) {

  const booksWithoutCategory = books.filter( b => !Array.isArray(b.categories) );
  const booksWithCategories = books.filter( b => Array.isArray(b.categories) );
  const changedBooks = booksWithoutCategory.map( b => {
    b.categories = [ 'Uncategorized' ];
    return b;
  });
  return booksWithCategories.concat( changedBooks );
}


export function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
