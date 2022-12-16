const express = require("express");
const app = express();
require("./db/config");
const Line = require("./db/Line")
const User = require("./db/User")
const Brush = require("./db/Brush")
const Multi = require("./db/Multi")
const Circle = require("./db/Circle")
const Radar = require("./db/Radar")
const cors = require('cors');
const jwt = require("jsonwebtoken");
const jwtKey = "isro@secretkey"
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const PORT = 5000;

app.use(cors());
app.use(express.json());
app.post("/signup", async (req, resp) => {
    const data = await User.findOne(req.body);
    console.log(data)
    if (data) {
        if (data.email == req.body.email) {
            resp.send({ result: "User already exists" });
        }
        else {
            const user = await User(req.body);
            let result = await user.save();
            result = result.toObject();
            delete result.password;
            jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (error, token) => {
                if (error) {
                    resp.send({ result: "user not found" })
                }
                resp.send({ result, auth: token });
            })
        }
    }
    else {
        const user = await User(req.body);
        let result = await user.save();
        result = result.toObject();
        delete result.password;
        jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (error, token) => {
            if (error) {
                resp.send({ result: "user not found" })
            }
            resp.send({ result, auth: token });
        })
    }
});

app.post("/login", async (req, resp) => {
    console.log(req.body);
    const result = await User.findOne(req.body);
    console.log(User);
    if (result) {

        jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (error, token) => {
            if (error) {
                resp.send({ result: "user not found" })
            }
            resp.send({ result, auth: token });
        })
        console.log(result);

    }
    else {
        resp.send({ result: "No data found" });
    }
})

app.get("/line", verifyToken, async (req, resp) => {
    let result = await Line.find({})
    if (result.length > 0) {
        resp.send(result)
    }
    else {
        resp.send({ result: "No data found" });
    }
});

app.get("/brush", verifyToken, async (req, resp) => {
    let result = await Brush.find()
    if (result.length > 0) {
        resp.send(result)
        console.log(result);
    }
    else {
        resp.send({ result: "No data found" });
    }
});

app.get("/multi", verifyToken, async (req, resp) => {
    let result = await Multi.find()
    if (result.length > 0) {
        resp.send(result)
        console.log(result);
    }
    else {
        resp.send({ result: "No data found" });
    }
});

app.get("/circle", verifyToken, async (req, resp) => {
    let result = await Circle.find()
    if (result.length > 0) {
        resp.send(result)
        console.log(result);
    }
    else {
        resp.send({ result: "No data found" });
    }
});

app.get("/radar", verifyToken, async (req, resp) => {
    let result = await Radar.find()
    if (result.length > 0) {
        resp.send(result)
        console.log(result);
    }
    else {
        resp.send({ result: "No data found" });
    }
});

function verifyToken(req, resp, next) {
    let token = req.headers['authorization'];
    if (token) {
        token = token.split(" ")[1];
        jwt.verify(token, jwtKey, (error, valid) => {
            if (error) {
                resp.status(401).send({ result: "Please provide valid token" })
            }
            else {
                next()
            }
        })
        console.log(token);
    }
    else {
        resp.status(403).send("Please add token with header")
    }
}

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})