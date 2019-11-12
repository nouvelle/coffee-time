const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex");

const app = express();

// Setup Logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// Set the headers for incoming requests
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,OPTIONS,PATCH"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  next();
});

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));
app.get("/api", async (req, res) => {
  try {
    res.send("Hello Coffee! - /api");
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});
app.get("/api/urllist", async (req, res) => {
  try {
    const locations = await db.select().table("coffeetime");
    res.json(locations);
    // res.send("Hello Coffee! - /api/urllist");
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});

// Always return the main index.html, since we are developing a single page application
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
