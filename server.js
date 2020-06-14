require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const corsOptions = {
    origin : "http://localhost:8081"
}
const path = require("path");

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./form.routes')(app);

if (process.env.NODE_ENV === "production") {
    const appPath = path.join(__dirname, "client", "build");
    app.use(express.static(appPath));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(appPath, "index.html"));
    });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

