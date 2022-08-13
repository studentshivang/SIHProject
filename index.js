const cookieParser = require("cookie-parser");
const express = require("express");
const dbConnect = require("./connectors/Dbconnection");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/user", require("./routers/userRouter"));
app.use("/api", require("./routers/districtRouter"));

//Connect to db
dbConnect();

//Listen to port
const PORT = 5000;
app.listen(PORT, console.log(`Listening to port ${PORT}...`));
