import express from "express";

const port = process.env.PORT || 4000;

const app = express();

app.get("/api/recommendations", async (_req, res) => {
  const response = await fetch("http://localhost:4000/api/v1/recommendations").then(x => x.json())
  response.bla = 2
  res.json(response);
});

app.get("/api/v1/recommendations", (_req, res) => {
  res.json({ message: "Hello, world!" });
});


app.get("/*", async (_req, res) => {
  res.render("index.html", dist);
});

app.listen(port, () => {
  console.log("Server listening on port", port);
});
