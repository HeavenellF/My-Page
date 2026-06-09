export default function Nav() {
    return (
        <nav>
            <ul className="flex space-x-4 p-4 justify-center gap-16">
                <li><a href="#home"><u>Home</u></a></li>
                <li><a href="#about"><u>About</u></a></li>
                <li><a href="#contact"><u>Contact</u></a></li>
                <li><a href="/game"><u>Game</u></a></li>
            </ul>
        </nav>
    );
}