const http = require("http")
const express = require("express")

const app = express()
app.get("/jason", (req, res) => {
   try {res.send("Jason has the largest Pokemon collection")
}   catch (error) {
    console.error("There was an error" + error)
    res.status(400).send(error);
}
})
const server = http.createServer(app)
server.listen(3000, () => {
    console.log("Server is running")
})

