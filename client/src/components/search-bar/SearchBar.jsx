function SearchBar() {
    return (
        <form className="flex gap-2 max-w-xl mx-auto">

            <input
                type="text"
                placeholder="Search by title, author or keyword..."
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition"
            >
                Search
            </button>

        </form>
    );
}

export default SearchBar;
