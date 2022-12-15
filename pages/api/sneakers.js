import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("sneakers");

        const products = await db.collection("sneakers").find({}).toArray();

        res.json(sneakers)
        
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};