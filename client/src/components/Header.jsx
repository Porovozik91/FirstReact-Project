import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="bg-slate-300">
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <nav className="flex justify-between items-center 
        max-w-6xl mx-auto p-3" role="navigation">
                <Link to="/">
                    <div className="font-bold text-2xl" role="Logo">Adam</div>
                </Link>
                <ul className="flex gap-4 text-lg font-semibold">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/About"><li>About</li></Link>
                    <Link to="/SignIn"><li>Sign In</li></Link>
                    <Link to="/Contact"><li>Contact</li></Link>
                </ul>
            </nav>
        </header>
    )
}

