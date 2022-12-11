import clientPromise from "../lib/mongodb";
import Image from "next/image";
import Head from "next/head";

export default function Products({ products }) {
  return (
    <div className="container">
      <Head>
        <title>products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div>
      {products.map((product: any) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <Image src={product.photo} alt={product.name} width={200} height={200} />
        </div>
      ))}
    </div>
    </div>
  );
}

export async function getStaticProps() {
    const client = await clientPromise;
    const db = client.db();
    
    const products = await db.collection("products").find({}).toArray();
    
    return {
        props: {
        products: JSON.parse(JSON.stringify(products)),
        },
    };
    }