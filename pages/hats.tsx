import Head from 'next/head'
import Navbar from '../components/Navbar'
import clientPromise from '../lib/mongodb'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function HatPage({hats}) {
    return (
        <div className="container">
          <Head>
            <title>Hats</title>
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
                {hats.map((hat: any) => (
                  <div key={hat._id}>
                    <div className={styles.products}>
                    <p>{hat.name} ${hat.price}</p>
                    <Image src={hat.pic} alt="" width={400} height={400} />
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
      const db = client.db("hats");
      
      const hats = await db.collection("hats").find({}).toArray();
      
      return {
          props: {
          hats: JSON.parse(JSON.stringify(hats)),
          },
      };
      }