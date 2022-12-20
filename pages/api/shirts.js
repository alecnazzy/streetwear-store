import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("products");

       const shirts = await db
           .collection("products")
           .find({type: "shirt"})
           .sort({})
           .limit(10)
           .toArray();

       res.json(shirts);
   } catch (e) {
       console.error(e);
   }
};