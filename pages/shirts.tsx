import Head from 'next/head'
import Navbar from '../components/Navbar'
import clientPromise from '../lib/mongodb'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function ShirtPage({shirts}: {shirts: any}) {
    return (
        <div className="container">
          <Head>
            <title>Shirts</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
            <main>

              <Navbar />

              <div className={styles.product_page}>

              <ul className={styles.page_links}>
                <li><Link href="/shirts">Shirts</Link></li>
                <h2> | </h2>
                <li><Link href="/sneakers">Sneakers</Link></li>
                <h2> | </h2>
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

              <Footer />

            </main>
          </div>
    )}

    export async function getStaticProps() {
      const client = await clientPromise;
      const db = client.db("products");
      
      const shirts = await db.collection("products").find({type: "shirt"}).toArray();
      
      return {
          props: {
          shirts: JSON.parse(JSON.stringify(shirts)),
          },
      };
      }