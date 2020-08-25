const express = require("express");
const app = express();
var fs = require("fs");

const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

connectDB();
app.get("/uploads/:file", (req, res) => {
  res.sendFile(__dirname + "/client/public/uploads/" + req.params.file);
});
app.get("/payment", (req, res) => {
  fs.writeFile("mynewfile3.html", req.body.html, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });

  return res.sendFile(__dirname + "/mynewfile3.html");
});
app.use(express.json({ extended: true }));
app.use("/api/user", require("./routes/user"));
app.use("/api/product", require("./routes/product"));
app.use("/api/cart", require("./routes/cart"));
app.use("/api/payment", require("./routes/payment"));
app.use("/api/order", require("./routes/order"));

app.listen(PORT, () => {
  console.log(`Your Server is runing on ${PORT} post `);
});
