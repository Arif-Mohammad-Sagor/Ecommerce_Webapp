const app = require("./app");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

async function mongoConnection() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/MyStore");
    console.log(`db connected successfully`);
  } catch (err) {
    console.log(`db ${err}`);
  }
}

app.listen(port, async () => {
  await mongoConnection();
  console.log("my servering is running well on :", port);
});
