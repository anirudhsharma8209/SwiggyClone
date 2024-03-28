const express = require("express");
const main = express();
const PORT = 4500;

main.use(express.json());
main.get("/", (req, res) => {
    res.send("You are ready to go...");
})

main.listen(PORT, () => {
    console.log(`You are now Connected to the PORT ${PORT}`)
})