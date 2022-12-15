import Head from 'next/head'
import Navbar from '../components/Navbar'
import clientPromise from '../lib/mongodb'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function SneakerPage({sneakers}) {
    return (
        <div className="container">
          <Head>
            <title>Sneakers</title>
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
                {sneakers.map((sneaker: any) => (
                  <div key={sneaker._id}>
                    <div className={styles.products}>
                    <p>{sneaker.name} ${sneaker.price}</p>
                    <Image src={sneaker.pic} alt="" width={400} height={400} />
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
      const db = client.db("sneakers");
      
      const sneakers = await db.collection("sneakers").find({}).toArray();
      
      return {
          props: {
          sneakers: JSON.parse(JSON.stringify(sneakers)),
          },
      };
      }