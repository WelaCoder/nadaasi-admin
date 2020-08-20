const express = require("express");
const app = express();

const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

connectDB();
app.use(express.json({ extended: true }));
// app.use("/api/user", require("./routes/user"));
app.use("/api/product", require("./routes/product"));

app.listen(PORT, () => {
  console.log(`Your Server is runing on ${PORT} post `);
});
