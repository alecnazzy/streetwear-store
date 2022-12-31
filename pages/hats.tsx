import Head from 'next/head'
import Navbar from '../components/Navbar'
import PageLinks from '../components/PageLinks'
import Image from 'next/image'
import Footer from '../components/Footer'
import clientPromise from '../lib/mongodb'
import styles from '../styles/Home.module.css'

export default function HatPage({hats}:{hats: any}) {
    return (
        <div className="container">
          <Head>
            <title>WxE → Hats</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
            <main>

              <Navbar />
              <PageLinks />
              
              <div className={styles.product_page}>

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

              <Footer />

            </main>
          </div>
    )}

    export async function getServerSideProps() {
      try {
          const client = await clientPromise;
          const db = client.db("products");
  
          const hats = await db
              .collection("products")
              .find({type: "hat"})
              .sort({})
              .limit(20)
              .toArray();
  
          return {
              props: { hats: JSON.parse(JSON.stringify(hats)) },
          };
      } catch (e) {
          console.error(e);
      }
  }

    // export async function getStaticProps() {
    //   const client = await clientPromise;
    //   const db = client.db("products");
      
    //   const hats = await db.collection("products").find({type: "hat"}).toArray();
      
    //   return {
    //       props: {
    //       hats: JSON.parse(JSON.stringify(hats)),
    //       },
    //   };
    //   }