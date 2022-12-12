import Link from 'next/link'
import navbar from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <div className={navbar.navbar}>
            <nav>
            <ul>
                <li className={navbar.name}>
                    <Link href="/">
                        Placeholder | Streetwear
                    </Link>
                </li>
                <li className={navbar.links}>
                    <Link href="/">
                        Us
                    </Link>
                </li>
            </ul>
            </nav>
        </div>
    ) }