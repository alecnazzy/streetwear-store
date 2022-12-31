import Link from 'next/link'
import styles from '../styles/PageLinks.module.css'

export default function Page_Links() {
    return (
        <ul className={styles.page_links}>
                <li className={styles.page_link}><Link href="/shirts">Shirts</Link></li>
                <h2> | </h2>
                <li><Link href="/sneakers">Sneakers</Link></li>
                <h2> | </h2>
                <li><Link href="/hats">Hats</Link></li>
        </ul>

    )
}