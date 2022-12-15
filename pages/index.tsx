import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import { InferGetServerSidePropsType } from 'next'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export async function getServerSideProps(context: any) {
  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="container">
      <Head>
        <title>store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

      <Navbar />
           
      <div className={styles.thingy} >
          <span >
            <div className={styles.img}>
            <Link href="/shirts">
              <h2>Shirts</h2>
              <Image src="/shirt-home-display.jpg" alt="Shirts" width={800} height={500} />
              </Link>
            </div>
            <div className={styles.img}>
            <Link href="/sneakers">
              <h2>Sneakers</h2>
              <Image src="/sneaker2-home-display.jpg" alt="Sneakers" width={800} height={500} />
              </Link>
            </div>
            <div className={styles.img}>
            <Link href="/hats">
              <h2>Hats</h2>
              <Image src="/hat-home-display.jpg" alt="Hats" width={800} height={500} />
              </Link>
            </div>
          </span>
          </div>
          <div className={styles.content}>
          <h1>WEST COAST x EAST COAST</h1>
            <span>
              <Image src="/home-content-pic1.jpg" alt="Our mission" width={800} height={500} />
              <p>SF → NYC → MIA</p>
            </span>
            <span>
              <div className={styles.contact}>
              <h1>Contact us</h1>
              <ul>
                <li><Link href="https://www.instagram.com/" target="_blank">Instagram</Link></li>
                <li><Link href="https://twitter.com/home" target="_blank">Twitter</Link></li>
              </ul>
              </div>
              <Image src="/home-content-pic2.jpg" alt="Our mission" width={800} height={500} /> 
            </span>
          </div>

      </main>

    </div>
  )
}
