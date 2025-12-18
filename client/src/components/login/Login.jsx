import { Link, useNavigate } from "react-router";
function Login() {
    const navigate = useNavigate()
    const submitAction = (formData) => {
        const {email, password} = Object.fromEntries(formData)
        
        fetch('http://localhost:3030/users/login', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({email,password})
        })
        .then(navigate('/'))
        .catch(err => alert(err.message))
        
        
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-sky-100 flex items-center justify-center px-4">

            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">

                <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Login
                </h1>

                <p className="text-center text-gray-500 mb-6">
                    Sign in to your account
                </p>

                <form className="space-y-4" action={submitAction}>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            name="email"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            name="password"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition"
                    >
                        Login
                    </button>

                </form>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-indigo-500 font-medium cursor-pointer hover:underline">
                        Register
                    </Link>
                </p>

            </div>

        </div>
    );
}

export default Login;
