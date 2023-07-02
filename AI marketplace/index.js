const express = require("express");
const path = require("path");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.static("public")); // Serve static files from the "public" directory

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiKey = process.env.OPEN_API_KEY;

const client = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    Authorization: "Bearer " + apiKey,
    "Content-Type": "application/json",
  },
});

app.post("/complete", (req, res) => {
  const userInput = req.body.prompt;
  const prompt = `Top 5 AI tools related to ${userInput}, One line description of each of them, link to these ai tools and pricing of the ai tool `;

  const params = {
    model: "text-davinci-003",
    prompt,
    max_tokens: 200,
    temperature: 0.5,
    top_p: 1,
    n: 1, 
  };

  client
    .post("/completions", params)
    .then((response) => {
      const completions = response.data.choices.map((choice) => choice.text);
      console.log("API Response:", completions); // Print the API response in console
      res.json({ completions });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "An error occurred" });
    });
});

// Serve the index.html file for the root endpoint
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
