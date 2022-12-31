import Head from 'next/head'
import Navbar from '../components/Navbar'
import PageLinks from '../components/PageLinks'
import Image from 'next/image'
import Footer from '../components/Footer'
import clientPromise from '../lib/mongodb'
import styles from '../styles/Home.module.css'



export default function SneakerPage({sneakers}:{sneakers: any}) {
    return (
        <div className="container">
          <Head>
            <title>WxE → Sneakers</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
            <main>

              <Navbar />
              <PageLinks />
              <div className={styles.product_page}>

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