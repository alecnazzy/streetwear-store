import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("shirts");

        const products = await db.collection("shirts").find({}).toArray();

        res.json(shirts)
        
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};