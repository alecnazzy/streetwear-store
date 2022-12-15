import Head from 'next/head'
import Navbar from '../components/Navbar'
import clientPromise from '../lib/mongodb'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function ShirtPage({shirts}) {
    return (
        <div className="container">
          <Head>
            <title>Shirts</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
            <main>
              <div className={styles.product_page}>
              <Navbar />

              <ul className={styles.page_links}>
                <li><Link href="/shirts">Shirts</Link></li>
                <li><Link href="/sneakers">Sneakers</Link></li>
                <li><Link href="/hats">Hats</Link></li>
              </ul>

              <div className={styles.product_display}>
                {shirts.map((shirt: any) => (
                  <div key={shirt._id}>
                    <div className={styles.products}>
                    <p>{shirt.name} ${shirt.price}</p>
                    <Image src={shirt.pic} alt="" width={400} height={400} />
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </main>
          </div>
    )}

    export async function getStaticProps() {
      const client = await clientPromise;
      const db = client.db("shirts");
      
      const shirts = await db.collection("shirts").find({}).toArray();
      
      return {
          props: {
          shirts: JSON.parse(JSON.stringify(shirts)),
          },
      };
      }