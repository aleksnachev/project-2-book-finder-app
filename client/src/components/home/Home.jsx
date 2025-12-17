import { useEffect } from "react";
import BookGrid from "../books/BookGrid.jsx";
import SearchBar from "../search-bar/SearchBar.jsx";
import { useState } from "react";

function Home() {

    const [books,setBooks] = useState([])

    useEffect(() => {
        fetch('http://localhost:3030/data/books')
            .then(responce => responce.json())
            .then(res => setBooks(res))
    }, [])
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-sky-100 px-4 py-10">

            <div className="max-w-6xl mx-auto">

                <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
                    Book Finder
                </h1>

                <p className="text-center text-gray-600 mb-8">
                    Search and discover books using Google Books API
                </p>

                <div className="mb-10">
                    <SearchBar />
                </div>

                <BookGrid books={books}/>

            </div>
        </div>
    );
}

export default Home;
