import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function ShirtPage() {
    return (
        <div className="container">
        <Head>
          <title>Sneakers</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

            <main>
              <Navbar />
              <h1>Sneakers</h1>
            </main>
          </div>
    )}