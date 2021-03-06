import React, { Component } from "react";

class BookRow extends Component {
  render() {
    const book = this.props.book;
    const bookAuthors = book.authors;
    console.log(book.authors);
    const authorList = bookAuthors.map(author => <p>{author.name}</p>);
    return (
      <tr>
        <td>{book.title}</td>
        <td>{authorList}</td>
        <td>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </td>
      </tr>
    );
  }
}

export default BookRow;
