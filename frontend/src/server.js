const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/api/questions", async (req, res) => {
  try {
    const response = await axios.get("https://api.jsonserve.com/Uw5CrX");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch questions" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
