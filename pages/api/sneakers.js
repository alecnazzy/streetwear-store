import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("products");

       const sneakers = await db
           .collection("products")
           .find({type: "sneaker"})
           .sort({})
           .limit(10)
           .toArray();

       res.json(sneakers);
   } catch (e) {
       console.error(e);
   }
};