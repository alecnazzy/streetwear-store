import Head from 'next/head'
import Navbar from '../components/Navbar'
import PageLinks from '../components/PageLinks'
import Image from 'next/image'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import clientPromise from '../lib/mongodb'

export default function ShirtPage({shirts}: {shirts: any}) {
    return (
        <div className="container">
          <Head>
            <title>WxE → Shirts</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
            <main>

              <Navbar />
              <PageLinks />

              <div className={styles.product_page}>

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


    export async function getServerSideProps() {
      try {
          const client = await clientPromise;
          const db = client.db("products");
  
          const shirts = await db
              .collection("products")
              .find({type: "shirt"})
              .sort({})
              .limit(20)
              .toArray();
  
          return {
              props: { shirts: JSON.parse(JSON.stringify(shirts)) },
          };
      } catch (e) {
          console.error(e);
      }
  }

    // export async function getStaticProps() {
    //   const client = await clientPromise;
    //   const db = client.db("products");
      
    //   const shirts = await db.collection("products").find({type: "shirt"}).toArray();
      
    //   return {
    //       props: {
    //       shirts: JSON.parse(JSON.stringify(shirts)),
    //       },
    //   };
    //   }