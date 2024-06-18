const express = require("express");
const { getMagic8Page } = require("./magicBall");

const app = express();

// Routes
app.get("/", (req, res) => {
  res.status(200).send(`<h1>Available paths</h1>
        <ul>
            <li><a href="/batman">batman</a></li>
            <li><a href="/fraiser">fraiser</a></li>
            <li><a href="/borg">borg</a></li>
            <li><a href="/fox-mulde">fox-mulde</a></li>
            <li><a href="/zeus">zeus</a></li>
            <li><a href="/dorothy">dorothy</a></li>
            <li><a href="/frankensteinr">frankensteinr</a></li>
            <li><a href="/rocky">rocky</a></li>
            <li><a href="/golum">golum</a></li>
            <li><a href="/terminator">terminator</a></li>
            <li><a href="/magic8">magic8</a></li>
        </ul>`);
});

app.get("/batman", (req, res) => {
  res.status(200).send("To the Batmobile!");
});

app.get("/fraiser", (req, res) => {
  res.status(200).send("I'm listening");
});

app.get("/borg", (req, res) => {
  res.status(200).send("Resistance is futile");
});

app.get("/fox-mulder", (req, res) => {
  res.status(200).send("The truth is out there");
});

app.get("/zeus", (req, res) => {
  res.status(200).send("Release the Kraken");
});
app.get("/dorothy", (req, res) => {
  res.status(200).send("Toto, I've got a feeling we're not in Kansas anymore");
});
app.get("/frankensteinr", (req, res) => {
  res.status(200).send("It's alive!!!! It's alive ... maybe");
});
app.get("/rocky", (req, res) => {
  res.status(200).send("Yo, Adrian");
});
app.get("/golum", (req, res) => {
  res.status(200).send("My precious!!!!!");
});

app.get("/terminator", (req, res) => {
  //   res.status(200).send("Ill be back");
  res.status(200).send("Hasta la vista, baby");
});

app.get("/magic8", (req, res) => {
  res.status(200).send(getMagic8Page());
});

// Export
module.exports = app;
