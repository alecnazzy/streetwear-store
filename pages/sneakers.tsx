import Head from 'next/head'
import Navbar from '../components/Navbar'
import clientPromise from '../lib/mongodb'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function SneakerPage({sneakers}:{sneakers: any}) {
    return (
        <div className="container">
          <Head>
            <title>Sneakers</title>
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

              <Footer />

            </main>
          </div>
    )}

    export async function getServerSideProps() {
      try {
          const client = await clientPromise;
          const db = client.db("products");
  
          const sneakers = await db
              .collection("products")
              .find({type: "sneaker"})
              .sort({})
              .limit(20)
              .toArray();
  
          return {
              props: { sneakers: JSON.parse(JSON.stringify(sneakers)) },
          };
      } catch (e) {
          console.error(e);
      }
  }

    // export async function getStaticProps() {
    //   const client = await clientPromise;
    //   const db = client.db("products");
      
    //   const sneakers = await db.collection("products").find({type: "sneaker"}).toArray();
      
    //   return {
    //       props: {
    //       sneakers: JSON.parse(JSON.stringify(sneakers)),
    //       },
    //   };
    //   }