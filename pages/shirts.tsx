import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function ShirtPage() {
    return (
        <div className="container">
          <Head>
            <title>Shirts</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
            <main>
              <Navbar />

              <h1>Shirts</h1>
            </main>
          </div>
    )}