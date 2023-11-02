const express = require("express");
const compression = require("compression");
const path = require("path");
const app = express();
const port = process.env.port || 2200;

app.get("/api", (req, res) => {
  res.end("hello from vercel server");
});

app.use(compression());
app.use(express.static(path.join(__dirname, "build")));
app.get("*", function (req, res) {
  res.sendFile("/build/index.html", { root: "../" });
});

app.listen(port, () => {
  console.log(`server is running ${port}`);
});
