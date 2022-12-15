import Link from 'next/link'
import navbar from '../styles/Navbar.module.css'
import Image from 'next/image'

export default function Navbar() {
    return (
        <div className={navbar.navbar}>
            <nav>
            <ul>
                <li className={navbar.name}>
                    <Link href="/">
                        WxE | Streetwear
                    </Link>
                </li>
                <li>
                    <Image src="/cart2.png" alt="Cart" width={48} height={48} />
                </li>
            </ul>
            </nav>
        </div>
    ) }