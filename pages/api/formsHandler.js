import connectMongoDB from "../../libs/mongoDB";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  try {
    const { db } = await connectMongoDB();

    if (req.method === 'GET') {
      const forms = await db.collection('forms').find().toArray();
      return res.status(200).json(forms);
    } else if (req.method === 'POST') {
      const { formId, signature } = req.body;

      if (!formId || !signature) {
        return res
          .status(400)
          .json({ message: "formId and signature are required." });
      }

      const result = await db.collection("forms").updateOne(
        { _id: new ObjectId(formId) },
        {
          $set: {
            signature,
            DateUpdated: new Date(), 
            IsSigned: true, 
          },
        }
      );

      if (result.matchedCount === 0) {
        return res
          .status(404)
          .json({ message: "No form with the provided id was found." });
      }

      return res.status(200).json({ message: "Signature submitted successfully." });
    } else {
      return res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while processing your request." });
  }
}