// create server
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
// Instance
const app = express();
const PORT = 5000;
const URI = "mongodb+srv://rambaburai911:Ram911@zomato.bilturd.mongodb.net/zomato?retryWrites=true&w=majority";
// const host = "localhost";

const APIRoutes = require("./Routes/APIRoutes");
app.use(cors())
// Enable access to POST data (body parser)
app.use(express.json()) //converts string data to purejson data
app.use(express.urlencoded({extended:false})) // converts normal post data to json data, exclude params data
// Inject Routes in App
app.use("/", APIRoutes);
// Listener
console.log("connecting to DB..")
mongoose.set('strictQuery', true);
mongoose
  .connect(URI)
  .then(() => {
    app.listen(PORT, () => {
        console.log("DB connected successfully")
      console.log(`zomato server is running on  ${PORT}`);
    });
  })
  .catch(() => {
    console.log("error");
  });
