const express = require("express");
const bodyParser = require("body-parser");
const extractEntities = require("./extractEntities");

const app = express();
app.use(bodyParser.json());

app.post("/extract", async (req, res) => {
    const { searchTerm } = req.body;
    try {
        const result = await extractEntities(searchTerm);
    res.json(result);
    } catch (error) {
    res.status(500).send(error.message);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
