import BookCard from "./book-card/BookCard.jsx";


function BookGrid({
    books
}) {
    return (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {books.map(book => <BookCard book={book} key={book._id}/>)}

        </div>
    );
}

export default BookGrid;
