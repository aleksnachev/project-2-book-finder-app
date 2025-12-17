import { Link } from "react-router";

function Header() {
    return (
        <header className="bg-gradient-to-r from-indigo-500 to-sky-500 shadow-md">

            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* Logo / App name */}
                <div className="text-white font-bold text-xl tracking-wide">
                    Book Finder
                </div>

                {/* Navigation */}
                <nav>
                    <ul className="flex items-center gap-6 text-white font-medium">

                        <Link to='/'className="hover:text-indigo-100 transition cursor-pointer">
                            Home
                        </Link>

                        <Link to="/login"className="hover:text-indigo-100 transition cursor-pointer">
                            Login
                        </Link>

                        <Link to="/register"className="hover:text-indigo-100 transition cursor-pointer">
                            Register
                        </Link>

                        <Link to="/books/add"className="hover:text-indigo-100 transition cursor-pointer">
                            Add Book
                        </Link>

                        <Link to="/logout"className="hover:text-indigo-100 transition cursor-pointer">
                            Logout
                        </Link>

                    </ul>
                </nav>

            </div>

        </header>
    );
}

export default Header;
