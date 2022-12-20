import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("products");

       const hats = await db
           .collection("products")
           .find({type: "hat"})
           .sort({})
           .limit(10)
           .toArray();

       res.json(hats);
   } catch (e) {
       console.error(e);
   }
};