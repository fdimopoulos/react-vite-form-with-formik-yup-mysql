const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    password: "root",
    host: "localhost",
    database: "form",
});

app.post("/register", (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    db.query(
        "INSERT INTO users (firstName, lastName, email, password, confirmPassword) VALUES (?, ?, ?, ?, ?)",
        [firstName, lastName, email, password, confirmPassword],
        (err, result) => {
            console.log(err);
        }
    );
});

app.listen(3001, () => {
    console.log("server is running on port 3001");
});
