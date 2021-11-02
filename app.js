const express = require("express");
const app = express();
const characterRoutes = require("./routes/charactersRoutes");

app.use(express.json());

app.use("/characters", characterRoutes);

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
