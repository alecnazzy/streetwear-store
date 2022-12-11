import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("products");

        const products = await db.collection("products").find({}).toArray();

        res.json(products)
        
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};