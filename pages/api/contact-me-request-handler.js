import { MongoClient } from "mongodb";
const postRequestHandler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const client = await MongoClient.connect(
        "mongodb+srv://x_hrsht_x:hrsht-x007@cluster0.yos87.mongodb.net/my-portfolio-app?retryWrites=true&w=majority"
      );

      const db = client.db();
      const collection = db.collection("contact-requests");

      try {
        const responseObj = await collection.insertOne(req.body);

        res.status(201).json({
          id: responseObj.insertedId,
        });

        client.close();
      } catch (error) {
        res.json(error);
      }
    } catch (error) {
      res.json(error);
    }
  }
};
export default postRequestHandler;
