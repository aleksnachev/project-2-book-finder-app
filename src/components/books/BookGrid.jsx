import BookCard from "./book-card/BookCard.jsx";


function BookGrid() {
    return (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />

        </div>
    );
}

export default BookGrid;
