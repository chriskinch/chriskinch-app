import Link from 'next/link'

const Header = () => (
    <header>
        <div>
            <ul>
                <li>
                    <Link href="/"><a>Home</a></Link> |
                </li>
                <li>
                    <Link href="/about"><a>About</a></Link> |
                </li>
            </ul>
        </div>
    </header>
);

export default Header;