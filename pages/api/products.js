import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("products");

       const products = await db
           .collection("products")
           .find({})
           .sort({})
           .limit(30)
           .toArray();

       res.json(products);
   } catch (e) {
       console.error(e);
   }
};