// pages/api/reviews.js
import dbConnect from "@/lib/dbConnect";
import Review from "@/models/Review";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const { name, message, rating } = req.body;
    try {
      const review = await Review.create({ name, message, rating });
      return res.status(201).json({ success: true, review });
    } catch (error) {
      return res.status(400).json({ success: false, error });
    }
  }

  if (req.method === "GET") {
    const reviews = await Review.find().sort({ date: -1 });
    return res.status(200).json({ success: true, reviews });
  }

  res.status(405).end();
}
