import express from "express";

const app = express();
app.use(express.static("app"));
app.listen(3000, () => console.log("Website available at localhost:3000"));
