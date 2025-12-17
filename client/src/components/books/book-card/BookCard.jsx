function BookCard({
    book
}) {
    console.log(book);
    
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col hover:shadow-lg transition">

            {/* Book cover */}
            <div className="h-48 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                <img src={book.imgUrl}className="text-gray-400 text-sm"></img>
            </div>

            {/* Book info */}
            <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2">
                {book.title}
            </h3>

            <p className="text-sm text-gray-500 mb-1">
                Author: {book.author}
            </p>

            <p className="text-sm text-gray-400 mb-4">
                Year: {book.year}
            </p>

            {/* Actions */}
            <button
                className="mt-auto w-full py-2 rounded-xl border border-indigo-500 text-indigo-500 font-medium hover:bg-indigo-500 hover:text-white transition"
            >
                Details
            </button>

        </div>
    );
}

export default BookCard;
