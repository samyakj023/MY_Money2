const express = require("express");
require("dotenv").config();
const app = express();
const dbConnect = require('./dbConnect');
const port = process.env.PORT || 5000

const userRoute = require('./routes/usersRoute');
const transactionsRoute = require('./routes/transactionsRoute');
app.use(express.json());

const server = require("http").createServer(app);

const path = require('path')
app.use('/api/users/' , userRoute)
app.use('/api/transactions/' , transactionsRoute)

__dirname = path.resolve();
// render deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}


server.listen(port, () => console.log(`Server running on port ${port}`));