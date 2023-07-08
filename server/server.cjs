const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.get("/api", (req, res) => {
    res.json({"lessons": ["lesson1","lesson2","lesson3"] });
})

app.listen(5000, () => {console.log("Sever is up on port 5000")});