import { MongoClient } from "mongodb";
const postRequestHandler = (req, res) => {
  if (req.method === "POST") {
    MongoClient.connect(
      "mongodb+srv://x_hrsht_x:hrsht-x007@cluster0.yos87.mongodb.net/my-portfolio-app?retryWrites=true&w=majority"
    )
      .then((client) => {
        const db = client.db();
        const collection = db.collection("contact-requests");

        collection
          .insertOne(req.body)
          .then((responseObj) => {
            res.status(201).json({
              id: responseObj.insertedId,
            });
            client.close();
          })
          .catch((error) => {
            res.status(404).json({
              message: "unknown error occured",
            });
            client.close();
          });
      })
      .catch((error) => {
        res.status(500).json({
          message: "Internal server Error !",
        });
      });
  }
};
export default postRequestHandler;
