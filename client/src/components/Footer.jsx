import { Link } from "react-router-dom"

export default function Header() {
    return (
        <footer className="flex min-h-full px-6 py-12 lg:px-8">
           <section>
            <p>Copyright 2024</p>
           </section>
            <nav className="max-w-6xl mx-auto p-3" role="footer navigation">
                <Link to="/">
                    <div className="font-bold text-2xl" role="Logo">Adam</div>
                </Link>
                <ul className="flex gap-4 text-lg font-semibold">
                    <Link to="https://www.linkedin.com/in/adam-maltsagov-12ba3667/"><li>Linkedin</li></Link>
                </ul>
            </nav>
        </footer>
    )
}