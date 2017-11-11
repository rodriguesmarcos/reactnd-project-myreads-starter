import React from 'react';
import PropTypes from 'prop-types';
import serializeForm from 'form-serialize';

const BulkMove = ({children, bar, onBulkMove, shelves, books, showing, shelf = 'none'}) => {

  const onSubmit = handleMoveBooks;
  const select = renderBulkMoveSelect(shelves, shelf, onBulkMove);

  if ( showing.length === 0) {
    return children;
  }

  const childrenWithProps = React.Children.map(children,
    (child) => React.cloneElement(child, {
      isMovable: true
    })
  );

  return (
    <form onSubmit={(e)=> onSubmit(e, onBulkMove, books)}>
      <div>
        Move Books: { select }
        <button type="submit">Move</button>
      </div>

      {childrenWithProps}
    </form>
  )
};

const renderBulkMoveSelect = (shelves, shelf, onBulkMove) => {
  const noneOpt = [{ id: 'none', name: 'None' }];
  let shelvesOptions = shelves;
  if ( shelf.id )
    shelvesOptions = shelves.filter(s => s.id !== shelf.id ).concat(noneOpt);

  return (
    <select
      name="shelf"
      defaultValue=""
      onSubmit={onBulkMove}
    >
      <option
        value=""
        disabled={true}>
      Choose a shelf</option>
      {shelvesOptions.map(o => (
        <option
          key={o.id}
          value={o.id}>
        {o.name}</option>
      ))}
    </select>
  )

}

const handleMoveBooks = (e, onBulkMove, books) => {
  e.preventDefault();
  const values = serializeForm( e.target, { 'hash': true } );
  const { bookId:booksIds, shelf } = values;
  const changeBooks = books.filter( b => booksIds.includes(b.id)).filter( b => shelf !== b.shelf);

  onBulkMove( changeBooks, shelf );
}

BulkMove.propTypes = {
  bar: PropTypes.func,
  books: PropTypes.array.isRequired,
}

export default BulkMove;
