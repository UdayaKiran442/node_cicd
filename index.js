const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server is running")
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
